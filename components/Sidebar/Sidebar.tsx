// Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({ headings }) => {
  return (
    <div>
      <h3>ON THIS PAGE</h3>
      <ul>
      {headings.map((heading) => {
        return (
          <div>
          <Link key={heading.text} href={`#${heading.text}`} scroll={false}>
          <div style={{paddingLeft: `${ (heading.level-1) * 20}px`}}>
            <p className="text-900 dark:text-white">{heading.text}</p>
            {/* at level {heading.level} */}
          </div>
          </Link>
          </div>
        );
      })}
      </ul>
    </div>
  );
};

export default Sidebar;
