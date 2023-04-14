const React = require('react');


function New() {
    return (

        <div>
            <h1> Form Page</h1>
            <form action='/logs' method="POST">
                
                Title: <input type="text" name="name" />
                
                <br />
                
                Entry: <input type="textarea" 
                    name="entry" />
                <br />
                
                Is the Ship broken?: <input type="checkbox" name="shipIsBroken" />
                <br />
                
                <input type="submit" value="New Entry for Ship" />
                
                
            </form>
            </div>
        )
}

module.exports = New;