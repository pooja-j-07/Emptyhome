import React from 'react';
import Switch from '@material-ui/core/Switch';
import  Reports from './Reports';
  const Discounts = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div class="container"> 
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Reports/> : null }
      </div>
    )
  }
  
export default Discounts;
