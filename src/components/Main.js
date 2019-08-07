import React from 'react';
import images from '../static/download.png';
import '../main.css';
import axios from 'axios';
class Main extends React.Component {

    constructor() {
        super();
        this.state =
            {
                top_text: '',
                bottom_text: '',
                persons: []
            }
        this.handeInputs = this.handeInputs.bind(this);
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/42')
            .then(response => {
                console.log(response.data);
                this.setState({
                    persons: response.data
                })

            });
    }
    handeInputs(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row jumbotron">
                    <div className="col-md-6">
                        <h3 className="meme_heading">Generate own Meme</h3>
                        <p className="meme_description">
                            The Fastest Meme Generator on the Planet. Easily add text to images or memes.
                        </p>
                        <p>{this.state.top_text}</p>
                        <img src={images} />
                        <p>{this.state.bottom_text}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-8">
                            <form onSubmit={this.handleSubmit} className="form">
                                <input type="file" className="input_field" />
                                <input type="text" placeholder="Top text" name="top_text" value={this.state.top_text} onChange={this.handeInputs} className="input_field" />
                                <input type="text" placeholder="Bottom text" name="bottom_text" value={this.state.bottom_text} onChange={this.handeInputs} className="input_field" />
                                <input type="submit" value="Generate Meme" className="button_field" />
                            </form>

                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;