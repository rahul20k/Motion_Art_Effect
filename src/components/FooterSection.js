import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-4 flex justify-between items-center" style={{ background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)' }}>
      <div className="text-white ml-14">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </div>
      <div className="flex space-x-4 mr-10">
        <a href="/documentation" className="text-white">Documentation</a>
        <a href="/support" className="text-white ">Support</a>
      </div>
    </footer>
  );
}

export default FooterSection;