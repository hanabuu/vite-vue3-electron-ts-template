export interface AggregateType {
    data: string
    count: number
}


export interface System {
    SysdataType : string
    ContractTemplate : string
    OrderContractNum : string
    UnitNum : string
    SecUnitNum : string
    SecPlaceName : string
    OperateSecuritySubAddressArea : string
    LRMonitoringTimer : string
    LRForgettingAlarm : string
    UsePowerFailureMonitaoring : string
    SignalOfPowerFailure : string
    PowerFailureDetectingTime : string
    PowerFailureDetectingPreTime : string
    MonitorTime_NotLocked : string
    ReMonitoringTime_AfterStopWarningForNotLockedState : string
    LockedAlarmOperation_DuringSecurity : string
    WirelessCommunicationAnomalyTime : string
    SecurityPreTime : string
    VoiceOutput : string
    VoiceLanguage : string
    SpeedOfKBI : string
    UploadDayHistory : string
    UploadTimeHistory : string
    FWAutoUpdate : string
};

export interface UseAlarm {
    Security : string
    Locked : string
    Fire : string
    Gas : string
    Emergency : string
    FirstAid : string
    LifeRhythm : string
    Facility : string
    Protect : string
    PowerFailureAlsokSecurity : string
    PowerFailureHomeAlsokSecurity : string
    PowerFailureSelfSecurity : string
    PowerFailureHomeSelfSecurity : string
    PowerFailureUnsecurity : string
    BatteryOut : string
    TerminalFailure : string
    EquipmentFailure : string
    GasFireDisconnection : string
    LineError : string
};

export interface ShsCenterSend {
    Security : string
    Locked : string
    Fire : string
    Gas : string
    Emergency : string
    FirstAid : string
    LifeRhythm : string
    Facility : string
    Protect : string
    PowerFailure : string
    BatteryOut : string
    TerminalFailure : string
    EquipmentFailure : string
    GasFireDisconnection : string
    LineError : string
};


export interface SFR {
    Tampa : string
    TerminalFailure : string
    Disconnection : string
    LineError : string
    WiredUnitProtect : string
    KbiProtect : string
    WirelessProtect : string
    WirelessInternalError : string
    WiredUnitError : string
    ModuleError : string
    WiredUnitCommunicationError : string
    KbiCommunicationError : string
    WirelessCommunicationError : string
};

export interface Center {
    DataLineType : string
    RegularTransmissionInterval : string
    Interval_ToSendVersion : string
    Interval_ToSendDNS : string
};

export interface ServerHostName {
    ReceiveSignal_ServerHostName : string
    RM_ServerHostName : string
    TimeMotive_ServerHostName : string
    MonitorSignal_ServerHostName : string
    EventNotification_ServerHostName : string
    EventNotificationRM_ServerHostName : string
    MonitorEventNotification_ServerHostName : string
    ServerDomainName : string
    EventNotificationServerDomainName : string
    ReceiveSignal_ServerPortNum_Wired : string
    RM_ServerPortNum_Wired : string
    TimeSynchro_ServerPortNum_Wired : string
    MonitorSignal_ServerPortNum_Wired : string
    EventNotification_ServerPortNum_Wired : string
    EventNotificationRM_ServerPortNum_Wired : string
    MonitorEventNotification_ServerPortNum_Wired : string
    ReceiveSignal_ServerPortNum_Wireless : string
    RM_ServerPortNum_Wireless : string
    TimeSynchro_ServerPortNum_Wireless : string
    MonitorSignal_ServerPortNum_Wireless : string
    EventNotification_ServerPortNum_Wireless : string
    EventNotificationRM_ServerPortNum_Wireless : string
    MonitorEventNotification_ServerPortNum_Wireless : string
};

export interface CableLineCommon {
    Protocol : string
    SendIntervalUDP : string
    DNSSettingMode : string
    BackUpDNSAddress_A : string
    BackUpDNSAddress_B : string
    BackUpDNSAddress_A_v6 : string
    BackUpDNSAddress_B_v6 : string
    UseDHCP : string
    SecUnitMyIP : string
    SecUnitSubnetMask : string
    SecUnitDefaultGW : string
    SecUnitMyIP_v6 : string
    SecUnitSubnetPrefixLen_v6 : string
    SecUnitDefaultGW_v6 : string
    PortNumType : string
};


export interface Wireless {
    SIM : string
    LTEBoard : string
    WeekdayToCheckFWupdate : string
    TimeToCheckFWupdate : string
    APN_ManegementNum : string
    MyIP : string
    SubnetMask : string
    UDPSendInterval_NormalIP : string
    UDPSendInterval_BreakIP : string
    UDPSendInterval_WirelessOnly : string
    DNSSettingMode : string
    MainDNSAddress_A : string
    MainDNSAddress_B : string
};


export interface SNTP {
    TimeZone : string
    CorrectionCondition : string
    UpdateInterval : string
};


export interface SecuritySubAddressArea {
    SecuritySubAddressAreaNum_Key : string
    Attribute : string
    LinkTarget : string
    SecuritySubAddressAreaName : string
    EnteringTimer : string
    LeavingTimer : string
    EnteringTimer_AtHome : string
    LeavingTimer_AtHome : string
};

export interface SecurityZArea {
    SecurityZAreaNum : string
    SecuritySubAddressAreaNum : string
    SecurityZAreaName : string
};

export interface Input {
    DeviceNum_Key : string
    Name : string
    InputType : string
    Alarm_type : string
    SecuritySubAddressAreaNum : string
    SecurityAreaNum_InRoom_BelongTo : string
    ForcedLoop_DuringSecurityRelease : string
    AtHomeSecurity : string
    SettingInfo : string
    MonitoringBreakLine : string
    DisconnectionTime : string
    Num_LowerConnectedTerminals : string
    FixAlertTime_or_PreAlert : string
    RecoveryAlertTime : string
    MimamoriKenyou : string
    CancelRemote : string
    Memo : string
};

export interface ContactOutput {
    DeviceNum_Key : string
    SecuritySubAddressAreaNum : string
    OutputType : string
    OutputName : string
    OutputMode : string
};

export interface KBDOutput {
    DeviceNum_Key : string
    OneshotTime : string
    Target_SecuritySubAddress : string
    Target_AlsokSecurity : string
    Target_HomeAlsokSecurity : string
    Target_SelfSecurity : string
    Target_HomeSelfSecurity : string
};

export interface MenaceOutput {
    DeviceNum_Key : string
    OutputTime_Alsok : string
    OutputTime_Self : string
    Target_SecuritySubAddress : string
    TargetAlarm_Security : string
    TargetAlarm_Locked : string
    TargetAlarm_Fire : string
    TargetAlarm_gas : string
    TargetAlarm_Emergency : string
    TargetAlarm_FirstAid : string
    TargetAlarm_LifeRhythm : string
    TargetAlarm_Facility : string
    TargetAlarm_Protect : string
    TargetAlarm_PowerFailure : string
    TargetAlarm_TerminalFailure : string
    TargetAlarm_DeviceError : string
    TargetAlarm_Disconnection : string
    TargetAlarm_LineError : string
};


export interface ALSOK_Light {
    DeviceNum_Key : string
    OutputTime_ALSOK : string
    OutputTime_Self : string
    Target_SecuritySubAddress : string
    TargetAlarm_Security : string
    TargetAlarm_Locked : string
    TargetAlarm_Fire : string
    TargetAlarm_gas : string
    TargetAlarm_Emergency : string
    TargetAlarm_FirstAid : string
    TargetAlarm_LifeRhythm : string
    TargetAlarm_Facility : string
    TargetAlarm_Protect : string
    TargetAlarm_PowerFailure : string
    TargetAlarm_TerminalFailure : string
    TargetAlarm_DeviceError : string
    TargetAlarm_Disconnection : string
    TargetAlarm_LineError : string
};

export interface ALSOK_Buzzer {
    DeviceNum_Key : string
    TargetDeviceNum : string
    TargetTimer_AlsokSecurity : string
    TargetTimer_SelfSecurity : string
};

export interface ElectricLock {
    DeviceNum_Key : string
    OneshotTime : string
    InterlockingKBI : string
};

export interface WirelessTerminal {
    WirelessTerminalNum_Key : string
    WirelessTerminalType : string
    WirelessTerminalID : string
    PowerMode : string
    PowerFailure_Monitoring_Use : string
    Fixed_Time_Transmit_Use : string
    WirelessRepeater : string
    CancelRemoteNum : string
    Memo : string
    DeviceNum_Input1 : string
    DeviceNum_Input2 : string
};

export interface WirelessController {
    DeviceNum_Key : string
    Name : string
    OperateSecuritySubAddressArea : string
    Memo : string
};

export interface KBI {
    DeviceNum_Key : string
    Name : string
    OperateSecuritySubAddressArea : string
    KBIAddress_Key : string
    Usage : string
    InterlockingSecurity : string
    UseInterlockingElectricLock_OffSecurityOperation : string
    Encryption : string
    Type : string
    WiredUnitDeviceNum : string
    Memo : string
};

export interface WiredUnit {
    DeviceNum_Key : string
    Name : string
    SecuritySubAddressAreaNum : string
    Memo : string
};

export interface DoorChime {
    DoorChimeNum_key : string
    TargetDeviceNum : string
    SoundType : string
};

export interface LockedMonitoringSensor {
    DeviceNum : string
    TargetSensorLP : string
    TargetSensorRF : string
};

export interface CancelRemoteControl {
    TargetTimer : string
};


export interface Card {
    FormatType : string
    FixedCode : string
    VariableCode : string
    OperationDivision : string
    CardName : string
    StampedNum_Key : string
    EnableOrDisanable : string
    Date_StartUsing : string
    Date_StopUsing : string
    SecuritySubAddressArea_ToAllowMatching : string
};

export interface UserPINNum {
    SecuritySubAddressArea_Key : string
    PINNum : string
};

export interface SecurityZAreaSetting {
    SecuritySubAddressArea_Key : string
    TargetAtHomeSecurity : string
};

export interface Mimamori_Service {
    Mimamori_Cause : string
    Mimamori_Timer : string
    Mimamori_Time_1 : string
    Mimamori_Time_2 : string
    Mimamori_Time_3 : string
    Operation_Forgetting_Time : string
    MimamoriSecuritySubAddressArea : string
    Mimamori_Forced_Stop : string
    Mimamori_Update : string
};

export interface DevOrderContractNum {
    OrderContractNum : string
};

export interface DevTerminalAddress {
    TerminalAddress : string
};

export interface DevSecPlaceNum {
    SecPlaceName : string
};

export interface DevServiceContents {
    ContractForm : string
};

export interface DevSecurityUnit {
    EquipmentType : string
    Model : string
    FW_Version : string
    ManufacturingNum : string
    DeviceNum : string
};

export interface DevLTEModule {
    Model : string
    Version : string
    ManufacturingNum : string
    ManufactureName : string
    IccId : string
    Carrier : string
};

export interface DevLTEBoard {
    LTEBoardtype : string
};

export interface DevSwitchState {
    LTE_Antenna_SwitchState : string
    Radio_channel : string
};

export interface DevRepeater {
    DeviceNum_Key : string
    ManufacturingNum : string
    FW_Version : string
};

export interface DevWirelessTerminal {
    DeviceNum_Key : string
    ManufacturingNum : string
    AlarmType : string
    Name : string
};

export interface DevWirelessOutput {
    DeviceNum_Key : string
    ManufacturingNum : string
    Name : string
};

export interface DevContactInput {
    DeviceNum_Key : string
    InputInfo : string
    AlarmType : string
    Name : string
};

export interface DevContactOutput {
    DeviceNum_Key : string
    Name : string
};

export interface DevWirelessController {
    DeviceNum_Key : string
    EquipmentType : string
    Model : string
    ManufacturingNum : string
    FW_Version : string
    Name : string
};

export interface DevKBI {
    DeviceNum_Key : string
    EquipmentType : string
    Model : string
    Version : string
    Name : string
};

export interface DevWiredUnit {
    DeviceNum_Key : string
    EquipmentType : string
    Model : string
    ManufacturingNum : string
    FW_Version : string
    Name : string
};

export interface DevUpdateInfo {
    Common_FW_BookingStatus : string
    WiredUnit_FW_BookingStatus : string
    Common_SD_BookingStatus : string
    CardData_BookingStatus : string
    UserManagementData_BookingStatus : string
    HD_BookingStatus : string
    FW_LastReflectDate : string
    SD_LastReflectDate : string
    CardData_LastReflectDate : string
    UserManaegmentData_LastReflectDate : string
    HD_LastReflectDate : string
    OperationTestResult_LastCreateDate : string
};

export interface DevFileFormatVer {
    CommonSD : string
    Card : string
    UserManage : string
    HDManage : string
    EquipIdentifierInfo : string
};

export interface analysSDDataTmp {
    fieldName: string,
    meanValue: string
};

export class cAnalysSDDataTmp implements analysSDDataTmp{
    fieldName: string = "";
    meanValue: string = "";
};

export interface customerList {
    ContractTemplate : string
    OrderContractNum : string
    UnitNum : string
    SecPlaceName : string
    OrderOffice : string
    OperationOffice : string
    PostCode : string
};

export class cCustomerList implements customerList{
    ContractTemplate = "";
    OrderContractNum = "";
    UnitNum = "";
    SecPlaceName = "";
    OrderOffice: string = "";
    OperationOffice: string = "";
    PostCode: string = "";
};

export interface Rakutyaku {
    eventDate : string
    couse : string
    secPlaceName : string
    secInfo : string
    OfficeName : string
    unitCode : string
    unitName : string
    unitNum : string
    subAddress : string
    OrderContractNum : string
}

export class cRakutyaku implements Rakutyaku{
    eventDate: string = "";
    couse: string = "";
    secPlaceName: string = "";
    secInfo: string = "";
    OfficeName: string = "";
    unitCode: string = "";
    unitName: string = "";
    unitNum: string = "";
    subAddress: string = "";
    OrderContractNum: string = "";
};

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