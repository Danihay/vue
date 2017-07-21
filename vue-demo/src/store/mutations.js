import {
	HEAD_SHOW_SUCCESS,
	HEAD_SHOW_FAIL,
	HIDE_LOADING,
	SHOW_LOADING,
	FOOTER_HIDE,
	FOOTER_SHOW,
	LOGIN_REG_CANCEL,
	LOGIN_REG_IS
} from './type'

const state={
	loginOrReg:true,
	headShow:true,
	loading:false,
	footerShow:true
};

const mutations={
	/*头部*/
	[HEAD_SHOW_SUCCESS](state){
		state.headShow=true;
	},
	[HEAD_SHOW_FAIL](state){
		state.headShow=false;
		//console.log(state.headShow);
	},
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	/*login*/
	[LOGIN_REG_CANCEL](state){
		state.loginOrReg=false;
	},
	[LOGIN_REG_IS](state){
		state.loginOrReg=true;
	},
	/*footer*/
	[FOOTER_HIDE](state){
		state.footerShow=false;
	},
	[FOOTER_SHOW](state){
		state.footerShow=true;
	}
};

const getters={
	headShow(state){
		return state.headShow;
	},
	loading(state){
		return state.loading;
	},
	footerShow(state){
		return state.footerShow;
	},
	loginOrReg(state){
		return state.loginOrReg;
	}
};

export default{
	state,
	mutations,
	getters
}