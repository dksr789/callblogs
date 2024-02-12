const mongoose = require('mongoose');
const slugify = require('slugify');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: String,
    customSlug: String, // New field for custom slug
    slug: {
        type: String,
        unique: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

// Pre-save hook to generate slug
postSchema.pre('save', function(next) {
    // Only generate slug if customSlug is provided and slug is not already set
    if (this.customSlug && !this.slug) {
        this.slug = slugify(this.customSlug, { lower: true });
    }
    next();
});


module.exports = mongoose.model('Post', postSchema);
