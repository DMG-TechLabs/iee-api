import { json } from '@sveltejs/kit';
import { semesters } from './loadSemesters.js'


function isValidSemester(num){
    return !isNaN(num) || (num > 0 && num < 10);
}

export function GET({ request }) {
    const semester = new URL(request.url).searchParams.get('semester');

    if(!isValidSemester(semester)){
        return json({ error: 'Invalid semester parameter' }, 400);
    } 

    if (semester){
        try {
            return json(semesters[semester]);
        } catch (error) {
            console.error('Error reading JSON file:', error);
            return json({ error: 'Internal Server Error' }, 500);
        }
    } else {
        return json({ error: 'Invalid semester parameter or semester data not found' }, 400);
    }
}

