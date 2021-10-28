import React from 'react';
import MuiAutocomplete from 'mui-autocomplete';



function Home () {

  const cities = [
    {
      id: 1,
      name: "Alabama",
      code: "AL"
    },
    {
      id: 2,
      name: "Alaska",
      code: "AK"
    },
    {
      id: 3,
      name: "American Samoa",
      code: "AS"
    }];

    return (
      <div>
        <MuiAutocomplete
          placeholder="Countries"
          name="countries"
          setvalue={1}
          setdata={cities}
          variant="outlined"
          template={{
            title: 'name'
           }}
          />
      </div>
    );
}

export default Home;


