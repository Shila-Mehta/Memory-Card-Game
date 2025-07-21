export function ThemeSwitcher( {theme,setTheme}){
    return(
         <div className="mb-5">
            <label>Theme:</label>
            <select value={theme} onChange={(e)=>setTheme(e.target.value)} className="mt-4 p-2 rounded bg-[var(--bg-color)] text-[var(--text-color)] ">
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
                <option value='fun'>Fun</option>
            </select>
         </div>
    )
}