/**
 * Module dependencies
 */
const mongoose = require('mongoose');

const Task = mongoose.model('Task');

/**
 * @desc Function to get all task in db with filter or not
 * @return {Array} tasks
 */
exports.list = (filter) => Task.find(filter).sort('-createdAt').exec();

/**
 * @desc Function to create a task in db
 * @param {Object} task
 * @return {Object} task
 */
exports.create = (task) => new Task(task).save();

/**
 * @desc Function to get a task from db
 * @param {String} id
 * @return {Object} task
 */
exports.get = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return Task.findOne({ _id: id }).exec();
};

/**
 * @desc Function to update a task in db
 * @param {Object} task
 * @return {Object} task
 */
exports.update = (task) => new Task(task).save();

/**
 * @desc Function to delete a task in db
 * @param {Object} task
 * @return {Object} confirmation of delete
 */
exports.delete = (task) => Task.deleteOne({ _id: task.id }).exec();

/**
 * @desc Function to delete tasks of one user in db
 * @param {Object} filter
 * @return {Object} confirmation of delete
 */
exports.deleteMany = (filter) => {
  if (filter) return Task.deleteMany(filter).exec();
};
