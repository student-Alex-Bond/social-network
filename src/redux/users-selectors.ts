import {AppStateType} from "./redux-store";
import {usersType} from "./users-reducer";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType):Array<usersType> => {
    return state.usersPage.users;
}


export const getUserSuperSelector = createSelector([getUsers],(users)=>{
    return users.filter(u => true);
})

export const getPgeSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const followingInProgress = (state: AppStateType): Array<number> =>{
    return state.usersPage.followingInProgress
}