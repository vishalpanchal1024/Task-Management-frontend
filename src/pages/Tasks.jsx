import React, { useState } from 'react';
import { FiPlus, FiFilter, FiSearch, FiAlertCircle, FiClock, FiMoreVertical } from 'react-icons/fi';

const TasksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');


  const tasks = [
    {
      id: 'TASK-1234',
      title: 'Design new dashboard layout',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-03-20',
      assignee: {
        name: 'Sarah Wilson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
      }
    },
    {
      id: 'TASK-1235',
      title: 'Implement authentication system',
      status: 'todo',
      priority: 'high',
      dueDate: '2024-03-22',
      assignee: {
        name: 'Mike Johnson',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
      }
    },
    {
      id: 'TASK-1236',
      title: 'Create API documentation',
      status: 'completed',
      priority: 'medium',
      dueDate: '2024-03-18',
      assignee: {
        name: 'Emily Brown',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      }
    },
    {
      id: 'TASK-1237',
      title: 'Fix payment integration bugs',
      status: 'blocked',
      priority: 'high',
      dueDate: '2024-03-19',
      assignee: {
        name: 'John Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      }
    },
    {
      id: 'TASK-1238',
      title: 'Update user settings page',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2024-03-21',
      assignee: {
        name: 'Lisa Anderson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
      }
    }
  ];
  
  const getStatusStyles = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-orange-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6 p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Tasks</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <FiPlus className="mr-2" />
          New Task
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">All Status</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <FiFilter className="mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignee
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-500">{task.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyles(task.status)}`}>
                    {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center text-sm ${getPriorityStyles(task.priority)}`}>
                    <FiAlertCircle className="mr-1" />
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    {task.dueDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full" src={task.assignee.avatar} alt="" />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{task.assignee.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-900">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default TasksPage;