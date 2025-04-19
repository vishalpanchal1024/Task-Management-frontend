import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { AiOutlineClockCircle, AiOutlineTeam, AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots, BsListTask } from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';




function HomePage() {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: '1', title: 'Create login page', status: 'todo' },
            { id: '2', title: 'Design system', status: 'in-progress' },
            { id: '3', title: 'API integration', status: 'review' },
            { id: '4', title: 'Documentation', status: 'done' },
            { id: '5', title: 'User testing', status: 'todo' },
            { id: '6', title: 'Performance optimization', status: 'in-progress' },
          ]);
        }, 1000);
      });

      const columnData = [
        { 
          id: 'todo', 
          title: 'To Do', 
          tasks: [],
          color: 'bg-violet-500',
          icon: <AiOutlineClockCircle className="w-5 h-5" />
        },
        { 
          id: 'in-progress', 
          title: 'In Progress', 
          tasks: [],
          color: 'bg-amber-500',
          icon: <AiOutlineTeam className="w-5 h-5" />
        },
        { 
          id: 'review', 
          title: 'Review', 
          tasks: [],
          color: 'bg-blue-500',
          icon: <BsListTask className="w-5 h-5" />
        },
        { 
          id: 'done', 
          title: 'Done', 
          tasks: [],
          color: 'bg-emerald-500',
          icon: <AiOutlineCheck className="w-5 h-5" />
        },
      ];

      response.forEach((task) => {
        const column = columnData.find((col) => col.id === task.status);
        if (column) {
          column.tasks.push(task);
        }
      });

      setColumns(columnData);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch tasks');
      setLoading(false);
    }
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destColumn = columns.find((col) => col.id === destination.droppableId);

    if (!sourceColumn || !destColumn) return;

    const task = sourceColumn.tasks.find((t) => t.id === draggableId);
    if (!task) return;

    const newSourceTasks = [...sourceColumn.tasks];
    newSourceTasks.splice(source.index, 1);

    const newDestTasks = [...destColumn.tasks];
    newDestTasks.splice(destination.index, 0, { ...task, status: destination.droppableId });

    setColumns(columns.map(col => {
      if (col.id === source.droppableId) {
        return { ...col, tasks: newSourceTasks };
      }
      if (col.id === destination.droppableId) {
        return { ...col, tasks: newDestTasks };
      }
      return col;
    }));

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      setError('Failed to update task');
      setColumns(columns);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <BiLoaderAlt className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your tasks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg shadow-sm">
          <p className="font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Project Tasks</h1>
            <p className="text-gray-500 mt-1">Manage and track your team's progress</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <AiOutlinePlus className="w-5 h-5 mr-2" />
            Add Task
          </button>
        </div>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {columns.map((column) => (
              <div key={column.id} className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`${column.color} p-2 rounded-lg text-white`}>
                        {column.icon}
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-900">{column.title}</h2>
                        <p className="text-sm text-gray-500">{column.tasks.length} tasks</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <BsThreeDots className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="p-4 space-y-3 min-h-[150px]"
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`
                                bg-white rounded-lg p-4 border border-gray-100
                                ${snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500' : 'shadow-sm hover:shadow-md'}
                                transition-all duration-200
                              `}
                            >
                              <h3 className="text-sm font-medium text-gray-900">
                                {task.title}
                              </h3>
                              <div className="flex items-center mt-3 space-x-2">
                                <span className={`w-2 h-2 rounded-full ${column.color}`} />
                                <span className="text-xs text-gray-500">{column.title}</span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default HomePage;