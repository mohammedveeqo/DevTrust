import React from 'react';

const Disputes = () => {
  // Sample dispute data
  const disputes = [
    {
      id: 1,
      project: 'Project Alpha',
      status: 'Resolved',
      raisedBy: 'User A',
      raisedOn: '2023-11-15',
    },
    {
      id: 2,
      project: 'Project Beta',
      status: 'Pending',
      raisedBy: 'User B',
      raisedOn: '2023-12-01',
    },
    {
      id: 3,
      project: 'Project Gamma',
      status: 'In Review',
      raisedBy: 'User C',
      raisedOn: '2023-12-05',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Disputes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disputes.map((dispute) => (
          <div
            key={dispute.id}
            className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-medium mb-2">{dispute.project}</h2>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Raised By:</strong> {dispute.raisedBy}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Raised On:</strong> {dispute.raisedOn}
            </p>
            <p
              className={`text-sm font-semibold ${
                dispute.status === 'Resolved'
                  ? 'text-green-500'
                  : dispute.status === 'Pending'
                  ? 'text-yellow-500'
                  : 'text-blue-500'
              }`}
            >
              <strong>Status:</strong> {dispute.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disputes;
