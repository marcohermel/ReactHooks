export default function useLocalStorage(key) {

   let storedValue = localStorage.getItem(key);

    const setValue = value => {
        localStorage.setItem(key, value);
    };

    return [storedValue, setValue];
}