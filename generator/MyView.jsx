
        import React from 'react';
  
        const MyView = () => {
          return (
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          );
        };
  
        export default MyView;
      