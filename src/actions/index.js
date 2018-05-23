import {
    FETCH_COURSES,
    REMOVE_COURSE,
    ADD_COURSE,
    TOGGLE_DESCRIPTION
} from './types';

import axios from 'axios';

export function fetchCourses() {
    return function (dispatch) {
        axios.get(`http://localhost:5000/courses`)
            .then(response => {
                dispatch({
                    type: FETCH_COURSES,
                    payload: response.data
                }) 
            })
    }
}

export function removeCourse(course) {
    return {
        type: REMOVE_COURSE,
        payload: course
    }
}

export function addCourse(course) {
    return {
        type: ADD_COURSE,
        payload: course
    }
}

export function toggleDescription(course) {
    return {
        type: TOGGLE_DESCRIPTION,
        payload: course
    }
}