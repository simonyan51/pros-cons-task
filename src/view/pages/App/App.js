import React, { Component } from 'react';
import './App.css';
import { Header, InputList, DropTargetWrapper } from '../../components';
import { HEADER_TITLE, PROS_TITLE, CONS_TITLE } from '../../../core/constants/strings';
import { EListType } from '../../../core/constants/enums';
import { connect } from 'react-redux';
import { cntrlSetListItem, cntrlDropItem } from '../../../state/actions';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

/**
 * @name App
 * @description this component is a main container component
 */
class App extends Component {

  // -- Constructor -- //

  constructor(props) {
    super(props);

    this.state = {selectedListType: null};

    this.onProsType = this.onProsType.bind(this);
    this.onConsType = this.onConsType.bind(this);
    this.onEndDrag = this.onEndDrag.bind(this);
  }

  // -- Event Handlers -- //

  onProsType(item, value, index) {
    this.props.setListItem(item, value, index, EListType.Pros);
  }

  onConsType(item, value, index) {
    this.props.setListItem(item, value, index, EListType.Cons);
  }

  onDrop(data, type) {
    this.props.dropItem(data.item, type);
  }

  onEndDrag() {
    this.setState({selectedListType: null});
  }

  onDrag(listType) {
    this.setState({selectedListType: listType});
  }

  // -- Renderer -- //

  render() {

    const { prosList, consList } = this.props;

    return (
      <div className="App-container">
        <Header title={HEADER_TITLE} />
        <div className="App-lists">
          <div className="App-list">
            <DropTargetWrapper
              canDrop={this.state.selectedListType !== EListType.Pros} 
              onDrop={item => this.onDrop(item, EListType.Pros)}>
              <div className="App-list">
                <InputList 
                  onDrag={() => this.onDrag(EListType.Pros)} 
                  onEndDrag={this.onEndDrag} 
                  title={PROS_TITLE} 
                  list={prosList} 
                  onType={this.onProsType} />
              </div>
            </DropTargetWrapper>
          </div>
          <DropTargetWrapper 
            canDrop={this.state.selectedListType !== EListType.Cons} 
            onDrop={item => this.onDrop(item, EListType.Cons)}>
            <div className="App-list">
              <InputList
                onDrag={() => this.onDrag(EListType.Cons)} 
                onEndDrag={this.onEndDrag} 
                title={CONS_TITLE} 
                list={consList} 
                onType={this.onConsType} />
            </div>
          </DropTargetWrapper>
        </div>
      </div>
    );
  }
}

/**
 * @name mapStateToProps
 * @description this function maps redux states to component props
 */
const mapStateToProps = state => {
  return {
    prosList: state.prosAndConsList.prosList,
    consList: state.prosAndConsList.consList
  }
}

/**
 * @name mapDispatchToProps
 * @description this function maps redux dispatch to component props
 */
const mapDispatchToProps = dispatch => {
  return {
    setListItem: (value, item, index, type) => dispatch(cntrlSetListItem(value, item, index, type)),
    dropItem: (value, type) => dispatch(cntrlDropItem(value, type))
  }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App));
