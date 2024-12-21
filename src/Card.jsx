import React, { useEffect, useState } from 'react'
import { getStudents } from './utils/studentservice'

import './index.css';




export default function Card() {

  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (hasMore) {
      loadStudents();
    }
  }, [pageNumber]);

  const loadStudents = async () => {
    setLoading(true);
    const data = await getStudents(10, pageNumber);
    setStudents(prev => [...prev, ...data]);
    if (data.length < 10) {
      setHasMore(false);
    }
    setLoading(false);
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight -2  &&
      !loading && hasMore
    ) {
      setPageNumber(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div>
     
     <ul className="space-y-4">
  {students.map((student, index) => (
    <div key={index} className="flex flex-col p-4 m-2 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
      <div className="text-xl font-semibold mb-2">{index + 1}. {student.name}</div>
      <div className="text-sm text-gray-600">Age: {student.age}</div>
      <div className="text-sm text-gray-600">Marks: {student.marks}</div>
      <div className="text-sm text-gray-600">Roll Number: {student.rollNumber}</div>
    </div>
  ))}
</ul>

      {loading && <p>Loading more students...</p>}
    </div>
  );
}
