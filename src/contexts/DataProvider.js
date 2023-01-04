import { useState, useEffect, createContext, useContext } from 'react';

export const DataContext = createContext()

export const DataProvider = function(props) {
    // const db = getFirestore()
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=50c9f2b64591b303b60ec53b1d13e1dd`

    useEffect(() => {
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
          setLocation('')
        }
      }
    })
    const value = {
        searchLocation
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}