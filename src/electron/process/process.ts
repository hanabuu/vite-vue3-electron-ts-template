import sqlite from 'sqlite3'
import * as interfaces from "../lib/types/interfaces"

const getAllAddressSql: string = 'select * from AllAddress;';

export class allAddressDao {
    private _db: sqlite.Database;

    constructor(dbCon: sqlite.Database){
        this._db = dbCon;
    }

    public getAllAddress(): Promise<Object[]> {
        return new Promise((resolve, rejects) => {
            let ret: interfaces.allAddress[] = [];
            try {
                this._db.serialize(() => {
                    this._db.all(getAllAddressSql, (error, rows: interfaces.allAddress[]) => {
                        if(error){
                            rejects(error);
                        } else {
                            for(let i=0; i<rows.length; i++){
                                let tempAllAddress = new interfaces.cAllAddress();
                                tempAllAddress.code = rows.code;
                                tempAllAddress.Address = rows.Address;
                                tempAllAddress.Prefecture = rows.Prefecture;
                                tempAllAddress.Municipalities = rows.Municipalities;
                                tempAllAddress.Town = rows.Town;
                                ret.push(tempAllAddress);
                            }
                            resolve(ret);    
                        }
                    });
                });
            } catch(err) {
                console.error(err);
                rejects();
            }
        })
    }

}