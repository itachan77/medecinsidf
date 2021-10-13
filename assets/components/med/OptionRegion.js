import React from 'react';


const OptionRegion = ({region, recuperationRegion}) => (
    
    <option key={region.id} className="btnRegion" value={region.code}>{region.name}</option>
    

)

export default OptionRegion;


