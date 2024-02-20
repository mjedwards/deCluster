import React from 'react';
import EditTask from './EditTask';

function TaskModal({ isOpen, onClose, task }) {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
            {/* Modal */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-end">
                {/* Close button */}
                <button onClick={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 hover:text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Edit Task Component */}
              <EditTask task={task} onClose={onClose}/>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default TaskModal;