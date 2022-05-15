import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    
    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true,})

    useEffect(()=> {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({data: null, loading: true,})

        fetch(url)
        .then(data => data.json())
        .then(data => {

           
                if (isMounted.current) {
                    setState({
                        loading: false, 
                        data
                    })
                } 
          
         
           
        })
      
    }, [url] )


    
    return state;
}

