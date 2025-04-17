const mongoose = require('mongoose');
const FavoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipeName: { type: String, required: true },
    // You can still keep recipeIds if needed:
    recipeIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});
module.exports = mongoose.model('favorites', FavoriteSchema);
