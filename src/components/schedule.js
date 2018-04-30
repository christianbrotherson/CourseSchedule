import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { removeCourse } from '../actions';

class Schedule extends Component {

    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return (
            <div key={this.props.courses.indexOf(course)} className={`slot ${course.enrolled ? 'slot-course' : 'slot-empty'}`}>
                <div className="slot-title">{course.enrolled ? course.title : 'Empty Slot'}</div>
                <a className={`action slot-remove`} onClick={() => this.props.removeCourse(course)}>Remove Course</a>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="schedule-slots">
                    { 
                        //filter out our course instances that we are not enrolled in

                        // ordering 
                        
                        // empty slots

                        this.props.courses.map(this.renderCourse) 
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    var enrolledCourses = []

    state.courses.map((course) => {
        if (course.enrolled) {
            enrolledCourses.push(course);
        }
    })
    return { courses: enrolledCourses };
}

function mapDispatchToProps(dispatch) {
    return {
        removeCourse:(course) => {
            dispatch(removeCourse(course))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);