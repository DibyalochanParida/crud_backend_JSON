import { saveUsersData, getUsersData } from "../services/user/usersServices.js";
import { v4 as UID } from "uuid";


export const getUsers = async (req, res, next)=> {
    try {
      const users = getUsersData();
      res.send(users);
    } catch (error) {
      return next(error);
    }
  }

 export const updateUser = (req, res, next) => {
    try {
      let existUser = getUsersData();
      if(req.body.name !== undefined){
        
        existUser.data.find((e) => e.id == req.params.id).name = req.body.name;
      }
      if(req.body.email !== undefined){
        existUser.data.find((e) => e.id == req.params.id).email = req.body.email;
      }
      if(req.body.phone !== undefined){
        existUser.data.find((e) => e.id == req.params.id).phone = req.body.phone;
      }
      if(req.body.status !== undefined){
        existUser.data.find((e) => e.id == req.params.id).status = req.body.status;
      }
      saveUsersData(existUser);
      res.send(existUser);
    } catch (error) {
      return next(error);
    }
  };


export const addUser = (req, res, next) => {
    try {
      let existUser = getUsersData();
      existUser.data.push({
        id:UID(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        status:null,
      });
      saveUsersData(existUser);
      res.send(existUser);
    } catch (error) {
      return next(error);
    }
};

export const deleteUser = (req, res, next) => {
  try {
    let existUser = getUsersData();
    existUser.data = existUser.data.filter(function (item) {
      return item.id != req.params.id;
    });
    saveUsersData(existUser);
    res.send(existUser);
  } catch (error) {
    return next(error);
  }
};