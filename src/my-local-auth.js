import storage from 'localforage';

export let isAuthed = false;
  
async function logOut() {
    await storage.removeItem('local_authorization');
    isAuthed = false;
    console.log('loged out')
}
  
async function login() {
    await storage.setItem('local_authorization', 'local_view');
    isAuthed = true;
    console.log('loged in')
}
  
function isLogined() {
    const tempAuth = storage.getItem('local_authorization');
    if (tempAuth){
        isAuthed = true;
    }
    console.log('check auth', isAuthed);
    return isAuthed;
}
  
export default { logOut, login, isLogined };
  