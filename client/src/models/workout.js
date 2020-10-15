//List for the types of workouts available
const workouts ={
    types:['Cardio', 'Weightlifting', 'Yoga'],
    addType(workout){
        this.types.push(workout);
    },
    deleteType(workout){
        this.types.splice(this.types.findIndex(x=>x==workout),1);
    }

}
export default workouts;