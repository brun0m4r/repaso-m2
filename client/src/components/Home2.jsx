import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { getCharacters } from "../actions";
import { connect } from "react-redux";
import s from '../cssModules/Home.module.css';


class Home extends React.Component {

    componentDidMount() {
        this.props.getCharacters();
    }

    render() {
        return(
            <div>
                <h1>You are in home</h1>
                <Link className={s.link} to={'/create'}>Create Your Character</Link>
                <Cards characters={this.props.characters} />
                <Cards characters={this.props.charactersCreated} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        charactersCreated: state.charactersCreated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => dispatch(getCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);