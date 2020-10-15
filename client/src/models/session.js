/*
    Keeps track of users and stuffs
*/

const session = {
    user:null,
    notifications:[],
    users: [
        {
            name:'admin',
            handle: 'admin'
        },
        {
            name:'Maria De La Cruz',
            handle: 'maria.pimentel.908'
        },
        {
            name:'Dan Pimentel',
            handle: 'dgp0301'
        },
        {
            name:'John Doe',
            handle: 'JohnnyDonuts'
        },
    ],
    addUser(name, handle){
        this.users.push({name, handle});
    },
    deleteUser(delhandle){
        this.users.splice(this.users.findIndex(x=> x.handle==this.delhandle),1);
    }
    
}
export default session;
