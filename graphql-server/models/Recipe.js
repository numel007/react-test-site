import mongoose from 'mongoose';

export const Recipe = mongoose.model('Recipe', { title: String });
