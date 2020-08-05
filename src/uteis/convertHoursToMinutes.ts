/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/


export default function convertHoursToMinutes(time: string){
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}