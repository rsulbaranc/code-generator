
      import * as React from 'react';

      import './App.css'
     // import sampleData from './assets/sampleData'
      import TableView from './components/TableView';
      
      const  tableName = producto
      const data = [{"id":3,"descrip":"azucar"},{"id":2,"descrip":"arroz"},{"id":1,"descrip":"harina"}]

      const MyView = () => {
        return (
          <>
      
                <TableView sampleData={data} />
               
          </>
        );
      };
      
      export default MyView;
      