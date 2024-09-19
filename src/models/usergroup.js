const mongoose = require('mongoose');

const UserGroupSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'member', // Por ejemplo, 'admin', 'member', etc.
  },
});

module.exports = mongoose.model('UserGroup', UserGroupSchema);
