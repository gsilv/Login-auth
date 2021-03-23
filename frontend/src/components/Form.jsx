import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <body className="screen">
                {/* <img src={Photo} className="img-fluid" alt="logo-background"/> */}
                <form className="form">
                    <div className="card">
                        <div className="card-top">
                            <h2 className="title">Faça Login</h2>
                        </div>
                        <div className="card-group">
                            <label>User</label>
                            <input type="text" name="username" placeholder="digite seu username"/>
                        </div>
                        <div className="card-group">
                            <label>Senha</label>
                            <input type="password" name="password" placeholder="digite seu password"/>
                        </div>
                        <div className="card-group">
                            <label><input type="checkbox"/>lembre-me</label>
                        </div>
                        <div className="card-group btn">
                            <button name="button" type="submit"><strong>Submit</strong></button>
                        </div>
                    </div>
                </form>
            </body>
        )
    }
}

export default Form