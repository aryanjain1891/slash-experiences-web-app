
export * from './types';
export * from './categories';
export * from './nicheCategories';

// This is the main data management layer that will be used by the application
import { useState, useEffect } from 'react';
import { categories as defaultCategories } from './categories';
import { nicheCategories as defaultNicheCategories } from './nicheCategories';
import { Experience } from './types';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Create a data manager that loads experiences from Supabase
// and provides methods to update them

// This hook manages the experiences data
export const useExperiencesManager = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load experiences from Supabase on component mount
  useEffect(() => {
    const fetchExperiences = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const { data, error } = await supabase
          .from('experiences')
          .select('*');
        
        if (error) {
          throw error;
        }
        
        // Map Supabase data to our Experience type
        const mappedExperiences = data.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.image_url,
          price: item.price,
          location: item.location,
          duration: item.duration,
          participants: item.participants,
          date: item.date,
          category: item.category,
          nicheCategory: item.niche_category,
          trending: item.trending,
          featured: item.featured,
          romantic: item.romantic,
          adventurous: item.adventurous,
          group: item.group_activity
        })) as Experience[];
        
        setExperiences(mappedExperiences);
      } catch (err) {
        console.error('Error fetching experiences:', err);
        setError('Failed to load experiences');
        
        // Load from localStorage as fallback
        const saved = localStorage.getItem('experiences');
        if (saved) {
          setExperiences(JSON.parse(saved));
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchExperiences();
  }, []);

  // Add a new experience
  const addExperience = async (experience: Omit<Experience, 'id'>) => {
    try {
      // Map our Experience type to Supabase schema
      const { data, error } = await supabase
        .from('experiences')
        .insert({
          title: experience.title,
          description: experience.description,
          image_url: experience.imageUrl,
          price: experience.price,
          location: experience.location,
          duration: experience.duration,
          participants: experience.participants,
          date: experience.date,
          category: experience.category,
          niche_category: experience.nicheCategory,
          trending: experience.trending || false,
          featured: experience.featured || false,
          romantic: experience.romantic || false,
          adventurous: experience.adventurous || false,
          group_activity: experience.group || false
        })
        .select('*')
        .single();
        
      if (error) {
        throw error;
      }
      
      // Map the returned data to our Experience type
      const newExperience = {
        id: data.id,
        title: data.title,
        description: data.description,
        imageUrl: data.image_url,
        price: data.price,
        location: data.location,
        duration: data.duration,
        participants: data.participants,
        date: data.date,
        category: data.category,
        nicheCategory: data.niche_category,
        trending: data.trending,
        featured: data.featured,
        romantic: data.romantic,
        adventurous: data.adventurous,
        group: data.group_activity
      } as Experience;
      
      setExperiences(prev => [...prev, newExperience]);
      return newExperience;
    } catch (err) {
      console.error('Error adding experience:', err);
      toast.error('Failed to add experience');
      throw err;
    }
  };

  // Update an existing experience
  const updateExperience = async (id: string, updates: Partial<Experience>) => {
    try {
      // Map our Experience type updates to Supabase schema
      const updateData: any = {};
      
      if (updates.title !== undefined) updateData.title = updates.title;
      if (updates.description !== undefined) updateData.description = updates.description;
      if (updates.imageUrl !== undefined) updateData.image_url = updates.imageUrl;
      if (updates.price !== undefined) updateData.price = updates.price;
      if (updates.location !== undefined) updateData.location = updates.location;
      if (updates.duration !== undefined) updateData.duration = updates.duration;
      if (updates.participants !== undefined) updateData.participants = updates.participants;
      if (updates.date !== undefined) updateData.date = updates.date;
      if (updates.category !== undefined) updateData.category = updates.category;
      if (updates.nicheCategory !== undefined) updateData.niche_category = updates.nicheCategory;
      if (updates.trending !== undefined) updateData.trending = updates.trending;
      if (updates.featured !== undefined) updateData.featured = updates.featured;
      if (updates.romantic !== undefined) updateData.romantic = updates.romantic;
      if (updates.adventurous !== undefined) updateData.adventurous = updates.adventurous;
      if (updates.group !== undefined) updateData.group_activity = updates.group;
      
      const { error } = await supabase
        .from('experiences')
        .update(updateData)
        .eq('id', id);
        
      if (error) {
        throw error;
      }
      
      setExperiences(prev => 
        prev.map(exp => (exp.id === id ? { ...exp, ...updates } : exp))
      );
    } catch (err) {
      console.error('Error updating experience:', err);
      toast.error('Failed to update experience');
      throw err;
    }
  };

  // Delete an experience
  const deleteExperience = async (id: string) => {
    try {
      const { error } = await supabase
        .from('experiences')
        .delete()
        .eq('id', id);
        
      if (error) {
        throw error;
      }
      
      setExperiences(prev => prev.filter(exp => exp.id !== id));
    } catch (err) {
      console.error('Error deleting experience:', err);
      toast.error('Failed to delete experience');
      throw err;
    }
  };

  // Reset to default experiences - for development purposes only
  const resetExperiences = async () => {
    try {
      // This would require admin rights in a real application
      const { error } = await supabase
        .from('experiences')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all experiences
        
      if (error) {
        throw error;
      }
      
      // Refresh the experiences list
      const { data, error: fetchError } = await supabase
        .from('experiences')
        .select('*');
        
      if (fetchError) {
        throw fetchError;
      }
      
      // Map Supabase data to our Experience type
      const mappedExperiences = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.image_url,
        price: item.price,
        location: item.location,
        duration: item.duration,
        participants: item.participants,
        date: item.date,
        category: item.category,
        nicheCategory: item.niche_category,
        trending: item.trending,
        featured: item.featured,
        romantic: item.romantic,
        adventurous: item.adventurous,
        group: item.group_activity
      })) as Experience[];
      
      setExperiences(mappedExperiences);
      localStorage.removeItem('experiences');
      
      return { success: true, message: 'Experiences have been reset' };
    } catch (err) {
      console.error('Error resetting experiences:', err);
      toast.error('Failed to reset experiences');
      throw err;
    }
  };

  // Import experiences from JSON
  const importExperiences = async (jsonString: string) => {
    try {
      const importedExperiences = JSON.parse(jsonString);
      
      if (!Array.isArray(importedExperiences)) {
        return { success: false, message: 'Invalid format: expected an array' };
      }
      
      // Delete all existing experiences
      const { error: deleteError } = await supabase
        .from('experiences')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');
        
      if (deleteError) {
        throw deleteError;
      }
      
      // Insert new experiences
      const experiencesToInsert = importedExperiences.map((exp: any) => ({
        title: exp.title,
        description: exp.description,
        image_url: exp.imageUrl,
        price: exp.price,
        location: exp.location,
        duration: exp.duration,
        participants: exp.participants,
        date: exp.date,
        category: exp.category,
        niche_category: exp.nicheCategory,
        trending: exp.trending || false,
        featured: exp.featured || false,
        romantic: exp.romantic || false,
        adventurous: exp.adventurous || false,
        group_activity: exp.group || false
      }));
      
      const { error: insertError } = await supabase
        .from('experiences')
        .insert(experiencesToInsert);
        
      if (insertError) {
        throw insertError;
      }
      
      // Refresh the experiences list
      const { data, error: fetchError } = await supabase
        .from('experiences')
        .select('*');
        
      if (fetchError) {
        throw fetchError;
      }
      
      // Map Supabase data to our Experience type
      const mappedExperiences = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.image_url,
        price: item.price,
        location: item.location,
        duration: item.duration,
        participants: item.participants,
        date: item.date,
        category: item.category,
        nicheCategory: item.niche_category,
        trending: item.trending,
        featured: item.featured,
        romantic: item.romantic,
        adventurous: item.adventurous,
        group: item.group_activity
      })) as Experience[];
      
      setExperiences(mappedExperiences);
      
      return { success: true, message: 'Experiences imported successfully' };
    } catch (error) {
      console.error('Error importing experiences:', error);
      return { 
        success: false, 
        message: `Error importing: ${error instanceof Error ? error.message : 'Unknown error'}` 
      };
    }
  };

  // Export experiences to JSON
  const exportExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('experiences')
        .select('*');
        
      if (error) {
        throw error;
      }
      
      // Map Supabase data to our Experience type for export
      const exportData = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.image_url,
        price: item.price,
        location: item.location,
        duration: item.duration,
        participants: item.participants,
        date: item.date,
        category: item.category,
        nicheCategory: item.niche_category,
        trending: item.trending,
        featured: item.featured,
        romantic: item.romantic,
        adventurous: item.adventurous,
        group: item.group_activity
      }));
      
      return JSON.stringify(exportData, null, 2);
    } catch (err) {
      console.error('Error exporting experiences:', err);
      toast.error('Failed to export experiences');
      throw err;
    }
  };

  return {
    experiences,
    isLoading,
    error,
    addExperience,
    updateExperience,
    deleteExperience,
    resetExperiences,
    importExperiences,
    exportExperiences
  };
};

// Create a standalone function to get all experiences
export const getAllExperiences = async (): Promise<Experience[]> => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*');
    
    if (error) {
      throw error;
    }
    
    // Map Supabase data to our Experience type
    return data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.image_url,
      price: item.price,
      location: item.location,
      duration: item.duration,
      participants: item.participants,
      date: item.date,
      category: item.category,
      nicheCategory: item.niche_category,
      trending: item.trending,
      featured: item.featured,
      romantic: item.romantic,
      adventurous: item.adventurous,
      group: item.group_activity
    })) as Experience[];
  } catch (err) {
    console.error('Error loading experiences:', err);
    
    // Return an empty array rather than throwing
    return [];
  }
};

// Create a standalone function to get experiences by category
export const getExperiencesByCategory = async (categoryId: string): Promise<Experience[]> => {
  try {
    const category = defaultCategories.find(cat => cat.id === categoryId);
    
    if (!category) {
      return [];
    }
    
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('category', category.name.toLowerCase());
    
    if (error) {
      throw error;
    }
    
    // Map Supabase data to our Experience type
    return data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.image_url,
      price: item.price,
      location: item.location,
      duration: item.duration,
      participants: item.participants,
      date: item.date,
      category: item.category,
      nicheCategory: item.niche_category,
      trending: item.trending,
      featured: item.featured,
      romantic: item.romantic,
      adventurous: item.adventurous,
      group: item.group_activity
    })) as Experience[];
  } catch (err) {
    console.error('Error loading experiences by category:', err);
    
    // Return an empty array rather than throwing
    return [];
  }
};

// Create a standalone function to get trending experiences
export const getTrendingExperiences = async (): Promise<Experience[]> => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('trending', true);
    
    if (error) {
      throw error;
    }
    
    // Map Supabase data to our Experience type
    return data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.image_url,
      price: item.price,
      location: item.location,
      duration: item.duration,
      participants: item.participants,
      date: item.date,
      category: item.category,
      nicheCategory: item.niche_category,
      trending: item.trending,
      featured: item.featured,
      romantic: item.romantic,
      adventurous: item.adventurous,
      group: item.group_activity
    })) as Experience[];
  } catch (err) {
    console.error('Error loading trending experiences:', err);
    
    // Return an empty array rather than throwing
    return [];
  }
};

// Create a standalone function to get featured experiences
export const getFeaturedExperiences = async (): Promise<Experience[]> => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('featured', true);
    
    if (error) {
      throw error;
    }
    
    // Map Supabase data to our Experience type
    return data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.image_url,
      price: item.price,
      location: item.location,
      duration: item.duration,
      participants: item.participants,
      date: item.date,
      category: item.category,
      nicheCategory: item.niche_category,
      trending: item.trending,
      featured: item.featured,
      romantic: item.romantic,
      adventurous: item.adventurous,
      group: item.group_activity
    })) as Experience[];
  } catch (err) {
    console.error('Error loading featured experiences:', err);
    
    // Return an empty array rather than throwing
    return [];
  }
};

// Create a standalone function to get a single experience by ID
export const getExperienceById = async (id: string): Promise<Experience | null> => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      throw error;
    }
    
    // Map Supabase data to our Experience type
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.image_url,
      price: data.price,
      location: data.location,
      duration: data.duration,
      participants: data.participants,
      date: data.date,
      category: data.category,
      nicheCategory: data.niche_category,
      trending: data.trending,
      featured: data.featured,
      romantic: data.romantic,
      adventurous: data.adventurous,
      group: data.group_activity
    } as Experience;
  } catch (err) {
    console.error('Error loading experience by ID:', err);
    return null;
  }
};
