import React from "react";

function ProgressForm({profileStudent}) {

    return (
                <form>
                    <div className="progress-inputs">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Session Date</span>
                            </div>
                            <input type="date" className="session-input form-control"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Select one</label>
                            </div>
                            <select name="" id="" className="session-input form-control">
                                <option value="">Choose...</option>
                                <option value="">{`High five, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Thanks for your hard work today, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Amazing job, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Outstanding effort, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Keep up the good work, ${profileStudent.firstname}!`}</option>
                                <option value="">{`${profileStudent.firstname} had difficulty participating in speech today.`}</option>
                                <option value="">{`${profileStudent.firstname} was unavailable for speech today.`}</option>
                                <option value="">{`${profileStudent.firstname} was absent from school today.`}</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">% trials correct</span>
                            </div>
                            <input type="number" className="session-input form-control"></input>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text textarea-span">Anecdotal data</span>
                            </div>
                            <textarea className="session-input form-control" ></textarea>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text textarea-span">Skill to practice at home</span>
                            </div>
                            <textarea className="session-input form-control" ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add session</button>
                </form>
    )
}

export default ProgressForm;