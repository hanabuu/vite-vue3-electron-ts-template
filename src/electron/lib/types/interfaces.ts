export interface ResLineMonitorCount {
    UnitNum: string,
    eventDate: string,
    G7IpCount: string,
    G7LteCount: string,
    NEIpCount: string,
    NELteCount: string,
}

export class cResLineMonitorCount implements ResLineMonitorCount {
    UnitNum: string = "";
    eventDate: string = "";
    G7IpCount: string = "";
    G7LteCount: string = "";
    NEIpCount: string = "";
    NELteCount: string = "";
}

export interface allAddress {
    code: string,
    oldAddress: string,
    Address: string,
    PrefectureKana: string,
    MunicipalitiesKana: string,
    TownKana: string,
    Prefecture: string,
    Municipalities: string,
    Town: string,
    ChomeMultiFlg: number,
    SmallFlg: number,
    ChomeFlg: number,
    AddressMultiFlg: number,
    updateFlg: number,
    changeFlg: number
}

export class cAllAddress implements allAddress {
    code: string = "";
    oldAddress: string = "";
    Address: string = "";
    PrefectureKana: string = "";
    MunicipalitiesKana: string = "";
    TownKana: string = "";
    Prefecture: string = "";
    Municipalities: string = "";
    Town: string = "";
    ChomeMultiFlg: number = 0;
    SmallFlg: number = 0;
    ChomeFlg: number = 0;
    AddressMultiFlg: number = 0;
    updateFlg: number = 0;
    changeFlg: number = 0;
}