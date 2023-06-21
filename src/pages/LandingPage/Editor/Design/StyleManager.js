import React, { useEffect } from 'react';

const StyleManager = ({ editor }) => {
  useEffect(() => {
    if (editor) {
      const selected = editor.on('style:target', (target) => {
        return true;
      });
      // console.log(selected)
    }
  }, []);

  return (
    <>
      <div
        id='style-manager'
        className='px-3'
      >
        <div id='selector-manager'></div>
      </div>
    </>
  );
};

export default StyleManager;
