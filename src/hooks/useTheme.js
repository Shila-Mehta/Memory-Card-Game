import  {useEffect ,useState}  from 'react';

export function useTheme(){
    const [theme,setTheme]=useState();

    useEffect(()=>{
      const savedTheme=localStorage.getItem('theme');
      // console.log('Loaded theme from localStorage:', savedTheme);
       if(savedTheme) setTheme(savedTheme);
    },[])


    useEffect(()=>{
       if(theme) localStorage.setItem('theme',theme);
        //  console.log('Saving theme to localStorage:',theme);
    },[theme])

    return [theme,setTheme];


}