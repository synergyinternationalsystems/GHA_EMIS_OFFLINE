module.exports = `CREATE TABLE "C_ActiveGroup" (
  activeGroupId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ActiveG__Delet__6F2DB2EC1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Age" (
  ageId        integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG     nvarchar(50),
  ageParentId  integer,
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Age__DeletedBy__7021D7251
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_Age_C_AgeParent1
    FOREIGN KEY (AgeParentID)
    REFERENCES C_AgeParent(AgeParentID)
);
CREATE TABLE "C_AgeParent" (
  ageParentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG     nvarchar(50),
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_AgePare__Delet__6CA64BFC1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_AvailableRoomsType" (
  availableRoomsTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG              nvarchar(100),
  DeletedOn             datetime,
  DeletedBy             integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Availab__Delet__7115FB5E1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_AvailableSubject" (
  availableSubjectId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(50),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Availab__Delet__6E8E946E1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_AwayFromKms" (
  awayFromKmsId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_AwayFro__Delet__720A1F971
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_AwayFromKmsHeadHouseBasic" (
  awayFromKmsHeadHouseBasicId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer
);
CREATE TABLE "C_AwayFromKmsHeadHouseSec" (
  awayFromKmsHeadHouseSecId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer
);
CREATE TABLE "C_AwayFromKmsHeadHouseTVET" (
  awayFromKmsHeadHouseTVETId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer
);
CREATE TABLE "C_AwayFromSchool" (
  awayFromSchoolId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG          nvarchar(100),
  DeletedOn         datetime,
  DeletedBy         integer
);
CREATE TABLE "C_BadReason" (
  badReasonId      integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(50),
  goodBadId        integer,
  description_ENG  nvarchar(50),
  DeletedOn        datetime,
  DeletedBy        integer,
  /* Foreign keys */
  CONSTRAINT FK__C_BadReas__Delet__6F82B8A71
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_BadReason_C_GoodBad1
    FOREIGN KEY (GoodBadID)
    REFERENCES C_GoodBad(GoodBadID)
);
CREATE TABLE "C_BadReasonType" (
  badReasonTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(100),
  badReasonId      integer,
  DeletedOn        datetime,
  DeletedBy        integer,
  /* Foreign keys */
  CONSTRAINT FK__C_BadReas__Delet__73F268091
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_BadReasonType_C_BadReason1
    FOREIGN KEY (BadReasonID)
    REFERENCES C_BadReason(BadReasonID)
);
CREATE TABLE "C_BeneficiaryType" (
  beneficiaryTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(50),
  lable              nvarchar(50),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Benefic__Delet__74E68C421
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Boarding" (
  boardingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG    nvarchar(100),
  DeletedOn   datetime,
  DeletedBy   integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Boardin__Delet__75DAB07B1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_BuildingConstruction" (
  buildingConstructionId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                nvarchar(200),
  DeletedOn               datetime,
  DeletedBy               integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Buildin__Delet__76CED4B41
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_CapitationGrant" (
  capitationGrantId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(200),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Capitat__Delet__725F25521
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_CauseDeath" (
  causeDeathId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(100),
  DeletedOn     datetime,
  DeletedBy     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_CauseDe__Delet__77C2F8ED1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ClassFurniture" (
  classFurnitureId   integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(100),
  equipmentSchoolId  integer,
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ClassFu__Delet__78B71D261
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ClassFurnitureStudent" (
  classFurnitureStudentId   integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                  nvarchar(100),
  equipmentSchoolStudentId  integer,
  DeletedOn                 datetime,
  DeletedBy                 integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ClassFu__Delet__79AB415F1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_ClassFurnitureStudent_C_EquipmentSchoolStudent1
    FOREIGN KEY (EquipmentSchoolStudentID)
    REFERENCES C_EquipmentSchoolStudent(EquipmentSchoolStudentID)
);
CREATE TABLE "C_ClassroomRepairType" (
  classroomRepairTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG               nvarchar(50),
  DeletedOn              datetime,
  DeletedBy              integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Classro__Delet__7B9389D11
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ClassroomType" (
  classroomTypeId         integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                nvarchar(200),
  buildingConstructionId  integer,
  DeletedOn               datetime,
  DeletedBy               integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Classro__Delet__7C87AE0A1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_ClassroomType_C_BuildingConstruction1
    FOREIGN KEY (BuildingConstructionID)
    REFERENCES C_BuildingConstruction(BuildingConstructionID)
);
CREATE TABLE "C_ClassroomUncompleted" (
  classroomUncompletedId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                nvarchar(200),
  DeletedOn               datetime,
  DeletedBy               integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Classro__Delet__7D7BD2431
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_CompositionCouncil" (
  compositionCouncilId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG              nvarchar(100),
  DeletedOn             datetime,
  DeletedBy             integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Composi__Delet__7E6FF67C1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_CoreSubject" (
  coreSubjectId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  code           nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_CoreSub__Delet__7F641AB52
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_DiedParent" (
  diedParentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(100),
  DeletedOn     datetime,
  DeletedBy     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_DiedPar__Delet__00583EEE1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Disability" (
  disabilityId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(250),
  DeletedOn     datetime,
  DeletedBy     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Disabil__Delet__014C63271
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EducationalType" (
  educationalTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(100),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Educati__Delet__024087601
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ElectricityFunctional" (
  electricityFunctionalId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                 nvarchar(50),
  yesNoId                  integer,
  DeletedOn                datetime,
  DeletedBy                integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Electri__Delet__0334AB991
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_ElectricityFunctional_C_YesNo1
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID)
);
CREATE TABLE "C_ElectricityType" (
  electricityTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(50),
  yesNoId            integer,
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Electri__Delet__0428CFD21
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_ElectricityType_C_YesNo1
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID)
);
CREATE TABLE "C_EnrolmentAgeSchoolLevel" (
  enrolmentAgeSchoolLevelId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  ageId                      integer,
  schoolLevelId              integer,
  schoolLevelGroupId         integer,
  isChecked                  integer,
  name_ENG                   nvarchar(255),
  DeletedOn                  datetime,
  DeletedBy                  integer,
  /* Foreign keys */
  CONSTRAINT FK_C_EnrolmentAgeSchoolLevel_C_SchoolLevelGroup1
    FOREIGN KEY (SchoolLevelGroupID)
    REFERENCES C_SchoolLevelGroup(SchoolLevelGroupID)
);
CREATE TABLE "C_EnrolmentProgramme" (
  enrolmentProgrammeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG              nvarchar(100),
  DeletedOn             datetime,
  DeletedBy             integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Enrolme__Delet__061118442
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EnrolmentProgrammeAdd" (
  enrolmentProgrammeAddId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                 nvarchar(200),
  DeletedOn                datetime,
  DeletedBy                integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Enrolme__Delet__7AF46B531
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EnrolmentSubject" (
  enrolmentSubjectId       integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                 nvarchar(100),
  enrolmentProgrammeAddId  integer,
  code                     nvarchar(50),
  isVisible                integer DEFAULT 2,
  DeletedOn                datetime,
  DeletedBy                integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Enrolme__Delet__07F960B61
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_EnrolmentSubject_C_EnrolmentProgramme1
    FOREIGN KEY (EnrolmentProgrammeAddID)
    REFERENCES C_EnrolmentProgramme(EnrolmentProgrammeID)
);
CREATE TABLE "C_EnrolmentSummary" (
  enrolmentSummaryId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(50),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Enrolme__Delet__08ED84EF1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EnvironmentalProblem" (
  environmentalProblemId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                nvarchar(100),
  DeletedOn               datetime,
  DeletedBy               integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Environ__Delet__09E1A9281
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Equipment" (
  equipmentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG     nvarchar(100),
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Equipme__Delet__7BE88F8C1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_MeansForStudent" (
  meansForStudentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_MeansFo__Delet__7CDCB3C51
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_RequiredProgrammeEquipment" (
  requiredProgrammeEquipmentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  code           nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_RequiPE__Delet__7CDCB3C51
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_RequiredEquipmentCourse" (
  requiredEquipmentCourseId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_RequiEC__Delet__7CDCB3C51
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_BuildingRepair" (
  buildingRepairId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_BuildingRepair__Delet__7CDCB3C51
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EquipmentMaterial" (
  equipmentMaterialId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(100),
  DeletedOn            datetime,
  DeletedBy            integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Equipme__Delet__0AD5CD611
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EquipmentSchool" (
  equipmentSchoolId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(200),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Equipme__Delet__0BC9F19A1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_EquipmentSchoolStudent" (
  equipmentSchoolStudentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                  nvarchar(200),
  DeletedOn                 datetime,
  DeletedBy                 integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Equipme__Delet__0CBE15D31
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ExamAccredit" (
  examAccreditId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(100),
  yesNoId         integer,
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ExamAcc__Delet__7DD0D7FE1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_ExamAccredit_C_YesNo11
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID)
);
CREATE TABLE "C_Facility" (
  facilityId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG    nvarchar(100),
  DeletedOn   datetime,
  DeletedBy   integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Facilit__Delet__0DB23A0C
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);

CREATE TABLE "C_FacilitySchoolType" (
  facilitySchoolTypeID  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(255),
  schoolTypeId        integer,
  facilityId        integer,
  DeletedOn           datetime,
  DeletedBy           integer

);

CREATE TABLE "C_FacilityForReport" (
  facilityForReportId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(255),
  DeletedOn            datetime,
  DeletedBy            integer
);
CREATE TABLE "C_FinanceActivityExpenditure" (
  financeActivityExpenditureId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                      nvarchar(200),
  DeletedOn                     datetime,
  DeletedBy                     integer, isBasic integer, isSecondary integer, isTvet integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Finance__Delet__7EC4FC371
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_FinanceActivityIncome" (
  financeActivityIncomeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                 nvarchar(200),
  DeletedOn                datetime,
  DeletedBy                integer, isBasic integer, isSecondary integer, isTvet integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Finance__Delet__7FB920701
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_FinanceExpenditure" (
  financeExpenditureId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG              nvarchar(200),
  DeletedOn             datetime,
  DeletedBy             integer, isBasic integer, isSecondary integer, isTvet integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Finance__Delet__00AD44A91
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_FinanceIncome" (
  financeIncomeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(200),
  DeletedOn        datetime,
  DeletedBy        integer, isBasic integer, isSecondary integer, isTvet integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Finance__Delet__01A168E21
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Frequency" (
  frequencyId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG     nvarchar(50),
  yesNoId      integer,
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Frequen__Delet__0EA65E451
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_FundInstitution" (
  fundInstitutionId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(100),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_FundIns__Delet__0F9A827E1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Gender" (
  genderId   integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(250),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Gender__Delete__108EA6B711
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_GenderInstitutionType" (
  genderInstitutionTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                 nvarchar(100),
  DeletedOn                datetime,
  DeletedBy                integer,
  /* Foreign keys */
  CONSTRAINT FK__C_GenderI__Delet__0389B1541
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_GoodBad" (
  goodBadId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(50),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_GoodBad__Delet__1182CAF01
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_GovernInstitution" (
  governInstitutionId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(100),
  DeletedOn            datetime,
  DeletedBy            integer,
  /* Foreign keys */
  CONSTRAINT FK__C_GovernI__Delet__1276EF291
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Government" (
  governmentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(50),
  DeletedOn     datetime,
  DeletedBy     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Governm__Delet__136B13621
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_HandwashType" (
  handwashTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(100),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Handwas__Delet__15535BD41
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_HygieneEducation" (
  hygieneEducationId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(250),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Hygiene__Delet__1647800D1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ICTTraining" (
  ictTrainingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(200),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ICTTrai__Delet__173BA4461
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IndicatorEquipment" (
  indicatorEquipmentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG              nvarchar(200),
  DeletedOn             datetime,
  DeletedBy             integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Indicat__Delet__0571F9C61
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IndicatorManagement" (
  indicatorManagementId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG               nvarchar(255),
  DeletedOn              datetime,
  DeletedBy              integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Indicat__Delet__182FC87F11
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IndicatorPupilAttendance" (
  indicatorPupilAttendanceId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                    nvarchar(250),
  DeletedOn                   datetime,
  DeletedBy                   integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Indicat__Delet__1923ECB812
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IndicatorStatus" (
  indicatorStatusId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           text NOT NULL,

  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Indicat__Delet__084E66715
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IndicatorStudentAttendance" (
  indicatorStudentAttendanceId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                      nvarchar(250),
  DeletedOn                     datetime,
  DeletedBy                     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Indicat__Delet__1A1810F11
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IndicatorTargetNorm" (
  indicatorTargetNormId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG               text NOT NULL,
  DeletedOn              datetime,
  DeletedBy              integer
 
);
CREATE TABLE "C_IndicatorToilet" (
  indicatorToiletId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(255),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Indicat__Delet__1B0C352A1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Infrastructure" (
  infrastructureId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG          nvarchar(100),
  DeletedOn         datetime,
  DeletedBy         integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Infrast__Delet__0A36AEE31
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_IsDocumented" (
  isDocumentedId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(50),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_IsDocum__Delet__1C0059631
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_LocalityType" (
  localityTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(255),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Localit__Delet__1CF47D9C1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_LocateNear" (
  locateNearId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(50),
  DeletedOn     datetime,
  DeletedBy     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_LocateN__Delet__0C1EF7551
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Location1" (
  location1Id  integer NOT NULL PRIMARY KEY,
  locationId   integer,
  name_ENG     nvarchar(200),
  mapShapeId   integer,
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Locatio__Delet__0E073FC712
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Location2" (
  location2Id  integer NOT NULL PRIMARY KEY,
  location1Id  integer,
  name_ENG     nvarchar(200),
  mapShapeId   integer,

  codes        varchar(10),
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT C_Locations2_C_Locations11
    FOREIGN KEY (Location1ID)
    REFERENCES C_Location1(Location1ID), 
  CONSTRAINT FK__C_Locatio__Delet__0EFB64001
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Location3" (
  location3Id  integer NOT NULL PRIMARY KEY,
  location2Id  integer,
  name_ENG     nvarchar(200),
  mapShapeId   integer,

  codes        nvarchar(10),
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT C_Locations3_C_Locations22
    FOREIGN KEY (Location2ID)
    REFERENCES C_Location2(Location2ID), 
  CONSTRAINT FK__C_Locatio__Delet__0FEF88391
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ManagementUnit" (
  managementUnitId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG          nvarchar(250),
  code              nvarchar(50),
  DeletedOn         datetime,
  DeletedBy         integer
);
CREATE TABLE "C_NonTeachingStaff" (
  nonTeachingStaffId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(50),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_NonTeac__Delet__1DE8A1D51
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_NoteType" (
  noteTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG    nvarchar(50),
  DeletedOn   datetime,
  DeletedBy   integer,
  /* Foreign keys */
  CONSTRAINT FK__C_NoteTyp__Delet__13C0191D1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Proficiency" (
  proficiencyId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Profici__Delet__1EDCC60E1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Pupil" (
  pupilId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(250),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Pupil__Deleted__1FD0EA471
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_PupilTeacher" (
  pupilTeacherId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(250),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_PupilTe__Delet__20C50E801
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ReasonForLeaving" (
  reasonForLeavingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(50),
  isBasic integer,
  isSecondary integer,
  isTvet integer,
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ReasonF__Delet__21B932B91
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ReceiveService" (
  receiveServiceId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG          nvarchar(100),
  DeletedOn         datetime,
  DeletedBy         integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Receive__Delet__22AD56F21
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_RecordBooks" (
  recordBooksId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_RecordB__Delet__23A17B2B1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_RepairTypeNumber" (
  repairTypeNumberId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(50),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_RepairT__Delet__24959F641
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ReportType" (
  reportTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(250),
  DeletedOn     datetime,
  DeletedBy     integer
);
CREATE TABLE "C_RoadType" (
  roadTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG    nvarchar(50),
  yesNoId     integer,
  DeletedOn   datetime,
  DeletedBy   integer,
  /* Foreign keys */
  CONSTRAINT FK__C_RoadTyp__Delet__2589C39D1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_RoadType_C_YesNo1
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID)
);
CREATE TABLE "C_SBGMeet" (
  sbgMeetId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(50),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SBGMeet__Delet__27720C0F1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolApplyType" (
  schoolApplyTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(100),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolA__Delet__1A6D16AC1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolCategory" (
  schoolCategoryId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG          nvarchar(100),
  DeletedOn         datetime,
  DeletedBy         integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolC__Delet__286630481
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolLevel" (
  schoolLevelId       integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(255),
  schoolLevelGroupId  integer,
  DeletedOn           datetime,
  DeletedBy           integer,

  isUsedInPupilAttendanceMovement integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolL__Delet__295A548112
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolLevelGroup" (
  schoolLevelGroupId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(255),
  schoolTypeId        integer,
  DeletedOn           datetime,
  DeletedBy           integer

);
CREATE TABLE "C_SchoolLevelGroupAdministration" (
  schoolLevelGroupAdministrationId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                          nvarchar(255),
  schoolTypeId                      integer,
  DeletedOn                         datetime,
  DeletedBy                         integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolL__Delet__2B429CF31
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_C_SchoolLevelGroupAdministration_C_SchoolType1
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID)
);
CREATE TABLE "C_SchoolLevelGroupForPortfolio" (
  schoolLevelGroupId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(255),
  schoolTypeId        integer,
  DeletedOn           datetime,
  DeletedBy           integer
);
CREATE TABLE "C_SchoolMealType" (
  schoolMealTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG          nvarchar(50),
  DeletedOn         datetime,
  DeletedBy         integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolM__Delet__2C36C12C11
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolRepairRoom" (
  schoolRepairRoomId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(100),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolR__Delet__2D2AE5651
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolStatus" (
 schoolStatusId      integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(255),
  schoolStatusGroupId  integer,
  DeletedOn            datetime,
  DeletedBy            integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolS__Delet__2E1F099E1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolStatusGroup" (
  schoolStatusGroupId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(255),
  DeletedOn            datetime,
  DeletedBy            integer
);
CREATE TABLE "C_SchoolSubject" (
  schoolSubjectId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(50),
  DeletedOn        datetime,
  DeletedBy        integer,
  /* Foreign keys */
  CONSTRAINT FK__C_SchoolS__Delet__300752101
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SchoolType" (
  schoolTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(100),
  DeletedOn     datetime,
  DeletedBy     integer,

  /* Foreign keys */
  CONSTRAINT FK__C_SchoolT__Delet__30FB7649112
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_StructureTypeNumber" (
  structureTypeNumberId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG               nvarchar(50),
  DeletedOn              datetime,
  DeletedBy              integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Structu__Delet__31EF9A821
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_StudentsCountType" (
  studentsCountTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(100),
  DeletedOn            datetime,
  DeletedBy            integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Student__Delet__32E3BEBB1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Subject" (
"subjectId" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , 
"name_ENG" NVARCHAR(250),
 "schoolLevelGroupId" INTEGER,
 "DeletedOn" DATETIME, 
"DeletedBy" INTEGER);
CREATE TABLE "C_SubjectSchoolLevel" (
"subjectSchoolLevelId" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , 
"teachingGuideId" INTEGER,
 "schoolLevelId" INTEGER,
 "schoolLevelGroupId" INTEGER, 
"isChecked" INTEGER,
 "name_ENG" nvarchar(255), 
"DeletedOn" DATETIME,
 "DeletedBy" INTEGER);
CREATE TABLE "C_SummaryType" (
  summaryTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Summary__Delet__33D7E2F41
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SupportArea" (
  supportAreaId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Support__Delet__34CC072D1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_SupportType" (
  supportTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Support__Delet__211A143B1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TVETProgramm" (
  tvetProgrammId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(100),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_TVETPro__Delet__3C6D28F51
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Targeting" (
  targetingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG     nvarchar(250),
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Targeti__Delet__35C02B6611
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeachLanguage" (
  teachLanguageId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(100),
  DeletedOn        datetime,
  DeletedBy        integer,
  /* Foreign keys */
  CONSTRAINT FK__C_TeachLa__Delet__3A84E08311
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherAcademicQualification" (
  teacherAcademicQualificationId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                        nvarchar(250),
  code                            nvarchar(50),
  DeletedOn                       datetime,
  DeletedBy                       integer
);
CREATE TABLE "C_TeacherFunction" (
  teacherFunctionId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(200),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__23025CAD1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherHandbook" (
  teacherHandbookId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(100),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__36B44F9F1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherNote" (
  teacherNoteId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(200),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__23F680E61
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherProfessionalQualification" (
  teacherProfessionalQualificationId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                            nvarchar(250),
  code                                nvarchar(50),
  DeletedOn                           datetime,
  DeletedBy                           integer
);
CREATE TABLE "C_TeacherQualificationStatus" (
  teacherQualificationStatusId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG                      nvarchar(200),
  DeletedOn                     datetime,
  DeletedBy                     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__24EAA51F1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherRank" (
  teacherRankId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(250),
  code           nvarchar(50),
  DeletedOn      datetime,
  DeletedBy      integer
);
CREATE TABLE "C_TeacherSalaryPaid" (
  teacherSalaryPaidId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(250),
  DeletedOn            datetime,
  DeletedBy            integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__25DEC9581
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherStaff" (
  teacherStaffId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(100),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__37A873D81
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherStatus" (
  teacherStatusId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(200),
  DeletedOn        datetime,
  DeletedBy        integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__26D2ED911
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherTraining" (
  teacherTrainingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG           nvarchar(50),
  DeletedOn          datetime,
  DeletedBy          integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__389C98111
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeacherType" (
  teacherTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(200),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teacher__Delet__27C711CA1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TeachingGuide" (
  teachingGuideId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG         nvarchar(100),
  DeletedOn        datetime,
  DeletedBy        integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Teachin__Delet__3990BC4A12
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ToiletResponsible" (
  toiletResponsibleId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG             nvarchar(200),
  DeletedOn            datetime,
  DeletedBy            integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ToiletR__Delet__29AF5A3C1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_ToiletType" (
  toiletTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG      nvarchar(200),
  DeletedOn     datetime,
  DeletedBy     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_ToiletT__Delet__3B7904BC1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Training" (
  trainingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG    nvarchar(200),
  DeletedOn   datetime,
  DeletedBy   integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Trai__Delet__173BA4462
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_TypeOfLeave" (
  typeOfLeaveId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_TypeOfL__Delet__3D614D2E1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_User" (
  id        integer NOT NULL PRIMARY KEY,
  name    nvarchar(1024)  NOT NULL
  
);
CREATE TABLE "C_Vehicle" (
  vehicleId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(50),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Vehicle__Delet__3F4995A011
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_WFActions" (
  wfActionId       integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  wfStateId        integer NOT NULL,
  wfTargetStateId  integer NOT NULL,
  name_ENG         text NOT NULL,

  description_ENG  nvarchar(250),
  DeletedOn        datetime,
  DeletedBy        integer,
  wfTemplateId     integer,
  /* Foreign keys */
  CONSTRAINT FK__C_WFActio__Delet__3338C476
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id), 
  CONSTRAINT C_WFAction_C_WFState
    FOREIGN KEY (WFTargetStateID)
    REFERENCES C_WFStates(WFStateID), 
  CONSTRAINT FK_C_WFAction_C_WFState_1
    FOREIGN KEY (WFStateID)
    REFERENCES C_WFStates(WFStateID)
);



CREATE TABLE "C_WFStates" (
	"wfStateId"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"wfProcessId"	integer default 1,
    "name_ENG"	text NOT NULL,
    "description_ENG"	nvarchar(250),
    "DeletedOn"	datetime,
	"DeletedBy"	integer,
	/* Foreign keys */
  CONSTRAINT FK__C_WFState__Delet__361531213
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);



CREATE TABLE "C_Water" (
  waterId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(200),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Water__Deleted__403DB9D91
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_WaterFlow" (
  waterFlowId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG     nvarchar(100),
  DeletedOn    datetime,
  DeletedBy    integer,
  /* Foreign keys */
  CONSTRAINT FK__C_WaterFl__Delet__4131DE1212
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_WaterSource" (
  waterSourceId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG       nvarchar(100),
  DeletedOn      datetime,
  DeletedBy      integer,
  /* Foreign keys */
  CONSTRAINT FK__C_WaterSo__Delet__31507C041
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_WaterStorage" (
  waterStorageId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG        nvarchar(200),
  DeletedOn       datetime,
  DeletedBy       integer,
  /* Foreign keys */
  CONSTRAINT FK__C_WaterSt__Delet__4226024B1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_WaterVesselsType" (
  waterVesselsTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG            nvarchar(200),
  DeletedOn           datetime,
  DeletedBy           integer,
  /* Foreign keys */
  CONSTRAINT FK__C_WaterVe__Delet__431A26841
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_Year" (
  yearId     integer NOT NULL PRIMARY KEY,
  name_ENG   nvarchar(200),

  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_Year__DeletedB__3709555A1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE "C_YesNo" (
  yesNoId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name_ENG   nvarchar(50),
  DeletedOn  datetime,
  DeletedBy  integer,
  /* Foreign keys */
  CONSTRAINT FK__C_YesNo__Deleted__440E4ABD1
    FOREIGN KEY (DeletedBy)
    REFERENCES C_User(id)
);
CREATE TABLE CensusRoadType
( censusSchoolRoadTypeId  INTEGER not null primary key, 
censusSchoolId INTEGER, 
yesNoId  INTEGER, 
roadTypeId  INTEGER
);
CREATE TABLE "CensusSchool" (
  censusSchoolId                    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  CensusSchoolInstanceId            integer,
  majorVersion                      integer,
  minorVersion                      integer,
  name                              nvarchar(255),
  yearId                            integer,
  schoolInstanceId                  integer,
  effluentFrom                      nvarchar(255),
  disposedOff                       nvarchar(255),
  uncompletedRoom                   numeric(18,2),
  OwnerUserid                       integer,
  UpdatedUserId                     integer,
  DateUpdated                       datetime,
  DateUpdated_YearId                integer,
  DateUpdated_QuarterId             integer,
  createdid                         integer,
  dateCreated                       datetime,
  dateCreated_YearId                integer,
  dateCreated_QuarterId             integer,
  WFStateId                         integer,
  WFActionId                        integer,
  isReadyForSubmit                   integer,
  isDocumentedId                    integer,
  censusSchoolDate                  datetime,
  SubmissionDate                    datetime,
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchool_C_User_Create
    FOREIGN KEY (Createdid)
    REFERENCES C_User(id), 
  CONSTRAINT FK_DE_CensusSchool_C_User_Owner
    FOREIGN KEY (OwnerUserid)
    REFERENCES C_User(id), 
  CONSTRAINT FK_DE_CensusSchool_C_User_Update
    FOREIGN KEY (UpdatedUserId)
    REFERENCES C_User(id), 
  CONSTRAINT FK_DE_CensusSchool_C_WFStates
    FOREIGN KEY (WFStateID)
    REFERENCES C_WFStates(WFStateID), 
  CONSTRAINT FK_DE_CensusSchool_C_Year
    FOREIGN KEY (YearID)
    REFERENCES C_Year(YearID), 
  CONSTRAINT FK_DE_CensusSchool_C_Year_Create
    FOREIGN KEY (DateCreated_YearID)
    REFERENCES C_Year(YearID), 
  CONSTRAINT FK_DE_CensusSchool_C_Year_Update
    FOREIGN KEY (DateUpdated_YearID)
    REFERENCES C_Year(YearID), 
  CONSTRAINT FK_DE_CensusSchool_School
    FOREIGN KEY (SchoolInstanceID)
    REFERENCES School(SchoolID)
);
CREATE TABLE "CensusSchoolActiveGroup" (
  censusSchoolActiveGroupId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId             integer,
  activeGroupId              integer,
  supportAreaId              integer,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolActiveGroup_C_ActiveGroup1
    FOREIGN KEY (ActiveGroupID)
    REFERENCES C_ActiveGroup(ActiveGroupID), 
  CONSTRAINT FK_CensusSchoolActiveGroup_C_SupportArea1
    FOREIGN KEY (SupportAreaID)
    REFERENCES C_SupportArea(SupportAreaID), 
  CONSTRAINT FK_CensusSchoolActiveGroup_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);

CREATE TABLE "CycleManagement" (
"CycleManagementID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"YearID" INTEGER,
"GreenAlert" INTEGER,
"RedAlert" INTEGER, "IsStarted" BOOLEAN,
 "IsStopped" BOOLEAN, "StartedDate" DATETIME,
 "StoppedDate" DATETIME );

 
CREATE TABLE "CensusSchoolActivityExpenditure" (
  censusSchoolActivityExpenditureId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                     integer,
  financeActivityExpenditureId       integer,
  amount                             numeric(18,4),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolActivityExpenditure_C_FinanceActivityExpenditure2
    FOREIGN KEY (FinanceActivityExpenditureID)
    REFERENCES C_FinanceActivityExpenditure(FinanceActivityExpenditureID), 
  CONSTRAINT FK_DE_CensusSchoolActivityExpenditure_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolActivityIncome" (
  censusSchoolActivityIncomeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                integer,
  financeActivityIncomeId       integer,
  amount                        numeric(18,4),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolActivityIncome_C_FinanceActivityIncome2
    FOREIGN KEY (FinanceActivityIncomeID)
    REFERENCES C_FinanceActivityIncome(FinanceActivityIncomeID), 
  CONSTRAINT FK_DE_CensusSchoolActivityIncome_CensusSchool2
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolAttachment" (
  censusSchoolAttachmentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId            integer,
  title_ENG                 nvarchar(100),
  addedByOn                 nvarchar(100),
  docType                   nvarchar(50)

);
CREATE TABLE "CensusSchoolAwayFrom" (
  censusSchoolAwayFromId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId          integer,
  awayFromSchoolId        integer,
  awayFromKmsId           integer,
  awayFromKmsHeadHouseBasicId        integer,
  awayFromKmsHeadHouseSecId          integer,
  awayFromKmsHeadHouseTVETId         integer,

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolAwayFrom_C_AwayFromKms
    FOREIGN KEY (AwayFromKmsID)
    REFERENCES C_AwayFromKms(AwayFromKmsID), 
  CONSTRAINT FK_DE_CensusSchoolAwayFrom_C_AwayFromKmsHeadHouseBasic
    FOREIGN KEY (AwayFromKmsHeadHouseBasicID)
    REFERENCES C_AwayFromKmsHeadHouseBasic(AwayFromKmsHeadHouseBasicID), 
  CONSTRAINT FK_DE_CensusSchoolAwayFrom_C_AwayFromKmsHeadHouseSec
    FOREIGN KEY (AwayFromKmsHeadHouseSecID)
    REFERENCES C_AwayFromKmsHeadHouseSec(AwayFromKmsHeadHouseSecID), 
  CONSTRAINT FK_DE_CensusSchoolAwayFrom_C_AwayFromKmsHeadHouseTVET
    FOREIGN KEY (AwayFromKmsHeadHouseTVETID)
    REFERENCES C_AwayFromKmsHeadHouseTVET(AwayFromKmsHeadHouseTVETID), 
  CONSTRAINT FK_DE_CensusSchoolAwayFrom_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolBadReason" (
  censusSchoolBadReasonId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId             integer,
  goodBadId                  integer,
  badReasonId                integer,
  badReasonTypeId            integer,
  censusSchoolBadReason_ENG  nvarchar(250),

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolBadReason_C_BadReason
    FOREIGN KEY (BadReasonID)
    REFERENCES C_BadReason(BadReasonID), 
  CONSTRAINT FK_DE_CensusSchoolBadReason_C_BadReasonType
    FOREIGN KEY (BadReasonTypeID)
    REFERENCES C_BadReasonType(BadReasonTypeID), 
  CONSTRAINT FK_DE_CensusSchoolBadReason_C_GoodBad
    FOREIGN KEY (GoodBadID)
    REFERENCES C_GoodBad(GoodBadID), 
  CONSTRAINT FK_DE_CensusSchoolBadReason_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE CensusSchoolBoardingFacility_Del (
  CensusSchoolBoardingFacilityID  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
 CensusSchoolID               integer,
 BoardingFacilityID          integer,
 YesNoID      integer
);
CREATE TABLE CensusSchoolCommenIssue (
  censusSchoolCommenIssueId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
 censusSchoolId              integer,
commentIssueDate    datetime2(7),
 status     nvarchar(50),
noteType nvarchar(50),
doteDetail nvarchar(500),
id  integer
);
CREATE TABLE "CensusSchoolCommittee" (
  censusSchoolCommitteeId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId             integer,
  yesNoId                    integer,
  frequencyId                integer,
  censusSchoolCommittee_ENG  nvarchar(250),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolCommittee_C_Frequency1
    FOREIGN KEY (FrequencyID)
    REFERENCES C_Frequency(FrequencyID), 
  CONSTRAINT FK_DE_CensusSchoolCommittee_C_YesNo2
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolCommittee_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolDocument" (
  censusSchoolDocumentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId          integer,
  documentId             integer,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolDocument_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID), 
  CONSTRAINT FK_CensusSchoolDocument_Document
    FOREIGN KEY (DocumentID)
    REFERENCES Document(DocumentID)
);
CREATE TABLE "CensusSchoolElectricityType" (
  censusSchoolElectricityTypeId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                   integer,
  yesNoId                          integer,
  electricityTypeId                integer,
  censusSchoolElectricityType_ENG  nvarchar(250),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolElectricityType_C_ElectricityType1
    FOREIGN KEY (ElectricityTypeID)
    REFERENCES C_ElectricityType(ElectricityTypeID), 
  CONSTRAINT FK_DE_CensusSchoolElectricityType_C_YesNo2
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolElectricityType_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolElectricityWired" (
  censusSchoolElectricityWiredId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                    integer,
  yesNoId                           integer,
  electricityFunctionalId           integer,
  censusSchoolElectricityWired_ENG  nvarchar(250),
  /* Foreign keys */
  CONSTRAINT "FK_DE_CensusSchoolElectricityWired _C_ElectricityFunctional"
    FOREIGN KEY (ElectricityFunctionalID)
    REFERENCES C_ElectricityFunctional(ElectricityFunctionalID), 
  CONSTRAINT "FK_DE_CensusSchoolElectricityWired _C_YesNo"
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT "FK_DE_CensusSchoolElectricityWired _CensusSchool"
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolEnvProblem" (
  censusSchoolEnvProblemId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId            integer,
  environmentalProblemId    integer,

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolEnvProblem_C_EnvironmentalProblem
    FOREIGN KEY (EnvironmentalProblemID)
    REFERENCES C_EnvironmentalProblem(EnvironmentalProblemID), 
  CONSTRAINT FK_DE_CensusSchoolEnvProblem_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolRequiredEquipment" (
  censusSchoolRequiredEquipmentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId           integer,
  requiredProgrammeEquipmentId              integer,
  requiredEquipmentCourseId            integer
);
CREATE TABLE "CensusSchoolExamAccredit" (
  censusSchoolExamAccreditId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId              integer,
  yesNoId                     integer,
  examAccreditId              integer,
  examAccredit_ENG            nvarchar(200),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolExamAccredit_C_ExamAccredit
    FOREIGN KEY (ExamAccreditID)
    REFERENCES C_ExamAccredit(ExamAccreditID), 
  CONSTRAINT FK_DE_CensusSchoolExamAccredit_C_YesNo
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolExamAccredit_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolExpenditure" (
  censusSchoolExpenditureId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId             integer,
  financeExpenditureId       integer,
  amount                     numeric(18,4),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolExpenditure_C_FinanceExpenditure1
    FOREIGN KEY (FinanceExpenditureID)
    REFERENCES C_FinanceExpenditure(FinanceExpenditureID), 
  CONSTRAINT FK_DE_CensusSchoolExpenditure_CensusSchool2
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolFacility" (
  censusSchoolFacilityId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId            integer,
  waterId                   integer,
  yesNoId                   integer,
  censusSchoolFacility_ENG  nvarchar(250),

  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolFacility_C_Water
    FOREIGN KEY (WaterID)
    REFERENCES C_Water(WaterID), 
  CONSTRAINT FK_CensusSchoolFacility_C_YesNo
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_CensusSchoolFacility_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE CensusSchoolFinanceSource (
 censusSchoolFinanceSourceId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
 censusSchoolId              integer,
 typeofWork     nvarchar(250),
source nvarchar(250),
cost decimal(18, 4)
);
CREATE TABLE "CensusSchoolHandwash" (
  censusSchoolHandwashId         integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                 integer,
  handwashTypePlaceId            integer,
  yesNoPlaceId                   integer,
  handwashTypeSoapId            integer,
  yesNoSoapId                    integer,
  handwashTypeWaterId            integer,
  yesNoWaterId                   integer,
  censusSchoolHandwashPlace_ENG  nvarchar(250),

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolHandwash_C_HandwashTypePlace1
    FOREIGN KEY (HandwashTypePlaceID)
    REFERENCES C_HandwashType(HandwashTypeID), 
  CONSTRAINT FK_DE_CensusSchoolHandwash_C_HandwashTypeSoap1
    FOREIGN KEY (HandwashTypeSoapID)
    REFERENCES C_HandwashType(HandwashTypeID), 
  CONSTRAINT FK_DE_CensusSchoolHandwash_C_HandwashTypeWater1
    FOREIGN KEY (HandwashTypeWaterID)
    REFERENCES C_HandwashType(HandwashTypeID), 
  CONSTRAINT FK_DE_CensusSchoolHandwash_C_YesNoPlace1
    FOREIGN KEY (YesNoPlaceID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolHandwash_C_YesNoSoap1
    FOREIGN KEY (YesNoSoapID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolHandwash_C_YesNoWater1
    FOREIGN KEY (YesNoWaterID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolHandwash_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolIncome" (
  censusSchoolIncomeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId        integer,
  financeIncomeId       integer,
  amount                numeric(18,2),
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolIncome_C_FinanceIncome1
    FOREIGN KEY (FinanceIncomeID)
    REFERENCES C_FinanceIncome(FinanceIncomeID), 
  CONSTRAINT FK_DE_CensusSchoolIncome_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolIndicatorTracking" (
  indicatorTrackingId               integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  indicatorInstanceId               integer NOT NULL,
  censusSchoolId                    integer NOT NULL,
  valueEntryModeId                  integer,
  trackingDate                      datetime,
  trackingDate_YearId               integer,
  trackingDate_QuarterId            integer,
  valueTypeId                       integer,
  actual_Text                       nvarchar(255),
  actual_Value                      numeric(30,5),
  actual_Value1                     numeric(30,5),
  actual_Value2                     numeric(30,5),
  actual_Value3                     numeric(30,5),
  actual_Value4                     numeric(30,5),
  actual_Value5                     numeric(30,5),
  target_Text                       nvarchar(255),
  target_Value                      numeric(30,5),
  target_Numerator                  numeric(30,5),
  target_Denominator                numeric(30,5),
  target_Value1                     numeric(30,5),
  target_Value2                     numeric(30,5),
  target_Value3                     numeric(30,5),
  target_Value4                     numeric(30,5),
  target_Value5                     numeric(30,5),
  waterId                           integer,
  disabilityId                      integer,
  pupilId                           integer,
  schoolTypeId                      integer,
  schoolLevelGroupId                integer,
  schoolLevelId                     integer,
  indicatorToiletId                 integer,
  pupilTeacherId                    integer,
  beneficiaryTypeId                integer,
  classroomTypeId                   integer,
  buildingConstructionId            integer,
  classroomRepairTypeId             integer,
  availableRoomsTypeId              integer,
  repairTypeNumberId                integer,
  facilityId                        integer,
  structureTypeNumberId             integer,
  classroomFurnitureId              integer,
  classFurnitureId                  integer,
  equipmentSchoolId                 integer,
  recordBooksId                     integer,
  indicatorEquipmentId              integer,
  teachingGuideId                   integer,
  availableSubjectId                integer,
  nonTeachingStaffId                integer,
  genderId                          integer,
  ageId                             integer,
  enrolmentAgeId                    integer,
  ictTrainingId                     integer,
  ageGroupId                        integer,
  causeDeathId                      integer,
  diedParentId                      integer,
  typeOfLeaveId                     integer,
  reasonsForLeavingId               integer,
  studentsCountTypeId               integer,
  vehicleId                         integer,
  schoolRepairRoomId                integer,
  coreSubjectId                     integer,
  teacherHandbookId                 integer,
  enrolmentSubjectId                integer,
  enrolmentProgrammeId              integer,
  ageSecondaryId                    integer,
  teacherStaffId                    integer,
  proficiencyId                     integer,
  boardingId                        integer,
  enrolmentProgrammeEnrolledId      integer,
  hygieneEducationId               integer,
  indicatorManagementId             integer,
  schoolLevelGroupAdministrationId  integer,
  schoolSubjectId                   integer,
  indicatorPupilAttendanceId        integer,
  targetingId                       integer,
  classroomUncompletedId            integer,
  enrolmentProgrammeAddId           integer,
  ageDieId                          integer,
  classFurnitureStudentId           integer,
  equipmentSchoolStudentId          integer,
  indicatorStudentAttendanceId      integer,
  equipmentMaterialId               integer,
  governmentId                      integer,
  enrolmentSummaryId                integer,
  meansForStudentId                 integer,
  equipmentId                       integer,
  buildingRepairId                integer,
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking1_C_Age
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_AvailableRoomsType
    FOREIGN KEY (AvailableRoomsTypeID)
    REFERENCES C_AvailableRoomsType(AvailableRoomsTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_AvailableSubject
    FOREIGN KEY (AvailableSubjectID)
    REFERENCES C_AvailableSubject(AvailableSubjectID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_BeneficiaryType
    FOREIGN KEY (BeneficiaryTypeID)
    REFERENCES C_BeneficiaryType(BeneficiaryTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Boarding
    FOREIGN KEY (BoardingID)
    REFERENCES C_Boarding(BoardingID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_BuildingConstruction
    FOREIGN KEY (BuildingConstructionID)
    REFERENCES C_BuildingConstruction(BuildingConstructionID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_CauseDeath
    FOREIGN KEY (CauseDeathID)
    REFERENCES C_CauseDeath(CauseDeathID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ClassFurniture
    FOREIGN KEY (ClassFurnitureID)
    REFERENCES C_ClassFurniture(ClassFurnitureID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ClassFurnitureStudent
    FOREIGN KEY (ClassFurnitureStudentID)
    REFERENCES C_ClassFurnitureStudent(ClassFurnitureStudentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ClassroomRepairType
    FOREIGN KEY (ClassroomRepairTypeID)
    REFERENCES C_ClassroomRepairType(ClassroomRepairTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ClassroomType
    FOREIGN KEY (ClassroomTypeID)
    REFERENCES C_ClassroomType(ClassroomTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ClassroomUncompleted
    FOREIGN KEY (ClassroomUncompletedID)
    REFERENCES C_ClassroomUncompleted(ClassroomUncompletedID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_CoreSubject
    FOREIGN KEY (CoreSubjectID)
    REFERENCES  C_CoreSubject(CoreSubjectID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_DiedParent
    FOREIGN KEY (DiedParentID)
    REFERENCES C_DiedParent(DiedParentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Disability
    FOREIGN KEY (DisabilityID)
    REFERENCES C_Disability(DisabilityID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EnrolmentProgramme
    FOREIGN KEY (EnrolmentProgrammeID)
    REFERENCES C_EnrolmentProgramme(EnrolmentProgrammeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EnrolmentProgrammeAdd
    FOREIGN KEY (EnrolmentProgrammeAddID)
    REFERENCES C_EnrolmentProgrammeAdd(EnrolmentProgrammeAddID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EnrolmentSubject
    FOREIGN KEY (EnrolmentSubjectID)
    REFERENCES C_EnrolmentSubject(EnrolmentSubjectID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EnrolmentSummary
    FOREIGN KEY (EnrolmentSummaryID)
    REFERENCES C_EnrolmentSummary(EnrolmentSummaryID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EquipmentKG
    FOREIGN KEY (EnrolmentAgeID)
    REFERENCES C_EquipmentKG(EquipmentKGID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EquipmentMaterial
    FOREIGN KEY (EquipmentMaterialID)
    REFERENCES C_EquipmentMaterial(EquipmentMaterialID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EquipmentSchool
    FOREIGN KEY (EquipmentSchoolID)
    REFERENCES C_EquipmentSchool(EquipmentSchoolID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_EquipmentSchoolStudent
    FOREIGN KEY (EquipmentSchoolStudentID)
    REFERENCES C_EquipmentSchoolStudent(EquipmentSchoolStudentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Facility
    FOREIGN KEY (FacilityID)
    REFERENCES C_Facility(FacilityID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Gender
    FOREIGN KEY (GenderID)
    REFERENCES C_Gender(GenderID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Government
    FOREIGN KEY (GovernmentID)
    REFERENCES C_Government(GovernmentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_HygieneEducation
    FOREIGN KEY (HygieneEducationID)
    REFERENCES C_HygieneEducation(HygieneEducationID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ICTTraining
    FOREIGN KEY (ICTTrainingID)
    REFERENCES C_ICTTraining(ICTTrainingID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_IndicatorEquipment
    FOREIGN KEY (IndicatorEquipmentID)
    REFERENCES C_IndicatorEquipment(IndicatorEquipmentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_IndicatorManagement
    FOREIGN KEY (IndicatorManagementID)
    REFERENCES  C_IndicatorManagement(IndicatorManagementID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_IndicatorPupilAttendance
    FOREIGN KEY (IndicatorPupilAttendanceID)
    REFERENCES C_IndicatorPupilAttendance(IndicatorPupilAttendanceID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_IndicatorStudentAttendance
    FOREIGN KEY (IndicatorStudentAttendanceID)
    REFERENCES C_IndicatorStudentAttendance(IndicatorStudentAttendanceID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_IndicatorToilet
    FOREIGN KEY (IndicatorToiletID)
    REFERENCES C_IndicatorToilet(IndicatorToiletID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Infrastructure
    FOREIGN KEY (ICTTrainingID)
    REFERENCES C_Infrastructure(InfrastructureID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_NonTeachingStaff
    FOREIGN KEY (NonTeachingStaffID)
    REFERENCES C_NonTeachingStaff(NonTeachingStaffID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Proficiency
    FOREIGN KEY (ProficiencyID)
    REFERENCES C_Proficiency(ProficiencyID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Pupil1
    FOREIGN KEY (PupilID)
    REFERENCES C_Pupil(PupilID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_PupilTeacher
    FOREIGN KEY (PupilTeacherID)
    REFERENCES C_PupilTeacher(PupilTeacherID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_ReasonsForLeaving
    FOREIGN KEY ( reasonsForLeavingId )
    REFERENCES C_ReasonForLeaving(ReasonForLeavingID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_RecordBooks
    FOREIGN KEY (RecordBooksID)
    REFERENCES C_RecordBooks(RecordBooksID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_RepairTypeNumber
    FOREIGN KEY (RepairTypeNumberID)
    REFERENCES C_RepairTypeNumber(RepairTypeNumberID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_SchoolLevel
    FOREIGN KEY (SchoolLevelID)
    REFERENCES C_SchoolLevel(SchoolLevelID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_SchoolLevelGroupAdministration
    FOREIGN KEY (SchoolLevelGroupAdministrationID)
    REFERENCES C_SchoolLevelGroupAdministration(SchoolLevelGroupAdministrationID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_SchoolRepairRoom
    FOREIGN KEY (SchoolRepairRoomID)
    REFERENCES C_SchoolRepairRoom(SchoolRepairRoomID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_SchoolSubject
    FOREIGN KEY (SchoolSubjectID)
    REFERENCES C_SchoolSubject(SchoolSubjectID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_SchoolType
    FOREIGN KEY (SchoolTypeID)
    REFERENCES  C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_StructureTypeNumber
    FOREIGN KEY (StructureTypeNumberID)
    REFERENCES C_StructureTypeNumber(StructureTypeNumberID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_StudentsCountType
    FOREIGN KEY (StudentsCountTypeID)
    REFERENCES  C_StudentsCountType(StudentsCountTypeID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Targeting
    FOREIGN KEY (TargetingID)
    REFERENCES C_Targeting(TargetingID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_TeacherHandbook
    FOREIGN KEY (TeacherHandbookID)
    REFERENCES C_TeacherHandbook(TeacherHandbookID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_TeacherStaff1
    FOREIGN KEY (TeacherStaffID)
    REFERENCES  C_TeacherStaff(TeacherStaffID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_TeachingGuide
    FOREIGN KEY (TeachingGuideID)
    REFERENCES C_TeachingGuide(TeachingGuideID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_TypeOfLeave
    FOREIGN KEY (TypeOfLeaveID)
    REFERENCES  C_TypeOfLeave(TypeOfLeaveID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Vehicle
    FOREIGN KEY (VehicleID)
    REFERENCES C_Vehicle(VehicleID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Water
    FOREIGN KEY (WaterID)
    REFERENCES  C_Water(WaterID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Year_Tracking
    FOREIGN KEY (TrackingDate_YearID)
    REFERENCES C_Year(YearID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_YesNo
    FOREIGN KEY (AgeGroupID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_MeansForStudent
    FOREIGN KEY (MeansForStudentID)
    REFERENCES C_MeansForStudent(MeansForStudentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_Equipment
    FOREIGN KEY (EquipmentID)
    REFERENCES C_Equipment(EquipmentID), 
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_C_BuildingRepair
    FOREIGN KEY (BuildingRepairID)
    REFERENCES C_BuildingRepair(BuildingRepairID)
  CONSTRAINT FK_DE_CensusSchoolIndicatorTracking_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);

CREATE TABLE "CensusSchoolInfrastructure" (
  censusSchoolInfrastructureId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                integer,
  infrastructureId              integer,
  yesNoId                       integer,
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolInfrastructure_C_Infrastructure1
    FOREIGN KEY (InfrastructureID)
    REFERENCES C_Infrastructure(InfrastructureID), 
  CONSTRAINT FK_DE_CensusSchoolInfrastructure_C_YesNo1
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolInfrastructure_DE_CensusSchool2
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolLanguage" (
  censusSchoolLanguageId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId          integer,
  teachLanguageId         integer,

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolLanguage_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID), 
  CONSTRAINT FK_DE_CensusSchoolLanguage_CensusSchoolLanguage
    FOREIGN KEY (TeachLanguageID)
    REFERENCES C_TeachLanguage(TeachLanguageID)
);
CREATE TABLE "CensusSchoolLevelSystem" (
  censusSchoolLevelSystemId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId             integer,
  schoolTypeId               integer,
  schoolLevelGroupId         integer,

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolLevelSystem_C_SchoolType
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_DE_CensusSchoolLevelSystem_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolMultigradeLevel" (
  censusSchoolMultigradeLevelId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                 integer,
  schoolTypeId                   integer,
  schoolLevelGroupId             integer,
  schoolLevelId                  integer,

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolMultigradeLevel_C_SchoolLevel
    FOREIGN KEY (SchoolLevelID)
    REFERENCES C_SchoolLevel(SchoolLevelID), 
  CONSTRAINT FK_DE_CensusSchoolMultigradeLevel_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolNote" (
  censusSchoolNoteId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId      integer,
  noteTypeId          integer,
  note_ENG            text,
 userId              integer,
  dateCreated         datetime,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolNote_C_NoteType
    FOREIGN KEY (NoteTypeID)
    REFERENCES C_NoteType(NoteTypeID), 
  CONSTRAINT FK_CensusSchoolNote_C_User
    FOREIGN KEY ( userId )
    REFERENCES C_User(id), 
  CONSTRAINT FK_CensusSchoolNote_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolQuestion" (
  censusSchoolQuestionId            integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                    integer,
  waterFacilityYesNoId              integer,
  locateNearId                      integer,
  waterId                           integer,
  waterFlowId                       integer,
  waterSourceId                     integer,
  waterSourceOther_ENG              nvarchar(150),
  waterStorageId                    integer,
  waterStorageOther_ENG             nvarchar(150),
  waterVesselsTypeId                integer,
  toiletTypeId                      integer,
  urinalsFunctionalYesNoId          integer,
  toiletsFunctionalYesNoId          integer,
  useToiletsYesNoId                 integer,
  cleanToiletsYesNoId               integer,
  toiletResponsibleId               integer,
  toiletResponsible_ENG             nvarchar(150),
  improvementPlanYesNoId            integer,
  effluentDischarge_ENG             nvarchar(150),
  solidWaste_ENG                    nvarchar(150),
  spipYesNoId                       integer,
  washYesNoId                       integer,
  hygieneYesNoId                    integer,
  hygieneTaught_ENG                 nvarchar(255),
  changingRoomYesNoId               integer,
  schoolHealthYesNoId               integer,
  sanitationActivityYesNoId         integer,
  healthCoordinatorYesNoId          integer,
  coHostingYesNoId                  integer,
  otherSchoolName_ENG               nvarchar(150),
  educationalTypeId                 integer,
  schoolCategoryId                  integer,
  documentedYesNoId                 integer,
  schoolApplyTypeId                 integer,
  capitationGrantYesNoPartiallyId   integer,
  sbgMeetId                         integer,
  inServiceReceiveServiceId         integer,
  capitationGrantId                 integer,
  insetYesNoId                      integer,
  selectBGYesNoId                   integer,
  boardGovernorFrequencyId          integer,
  gESReceiveServiceId               integer,
  receiveReceiveServiceId           integer,
  cSReceiveServiceId                integer,
  movementReceiveServiceId          integer,
  hivaidsYesNoId                    integer,
  hivaidsIssuesYesNoId              integer,
  sourcesLastYesNoId                integer,
  schoolMealTypeId                  integer,
  curriculumLeaderYesNoId           integer,
  insetSourcebooksYesNoId           integer,
  specialEducationYesNoId           integer,
  genderInstitutionTypeId           integer,
  propertyWalledYesNoId             integer,
  boardingFacilitiesYesNoId         integer,
  governInstitutionId               integer,
  governInstitution_ENG             nvarchar(200),
  schoolLevelGroupAdministrationId  integer,
  compositionCouncilId              integer,
  fundInstitutionId                 integer,
  fundInstitution_ENG               nvarchar(200),
  tvetProgrammId                    integer,
  tvetProgramm_ENG                  nvarchar(200),
  isDocumentedId                    integer,
  yesNoRampId                       integer,  
  yesNoRailsId                      integer,  
  isItFunctional                    boolean,
  nonTeachingStaffYesNoId           integer,  
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_AwayFromKms1
    FOREIGN KEY (SchoolLevelGroupAdministrationID)
    REFERENCES C_SchoolLevelGroupAdministration(SchoolLevelGroupAdministrationID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_CapitationGrant1
    FOREIGN KEY (CapitationGrantID)
    REFERENCES C_CapitationGrant(CapitationGrantID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_CompositionCouncil1
    FOREIGN KEY (CompositionCouncilID)
    REFERENCES C_CompositionCouncil(CompositionCouncilID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_EducationalType2
    FOREIGN KEY (EducationalTypeID)
    REFERENCES C_EducationalType(EducationalTypeID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_Frequency1
    FOREIGN KEY (BoardGovernorFrequencyID)
    REFERENCES C_Frequency(FrequencyID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_FundInstitution2
    FOREIGN KEY (FundInstitutionID)
    REFERENCES C_FundInstitution(FundInstitutionID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_GenderInstitutionType1
    FOREIGN KEY (GenderInstitutionTypeID)
    REFERENCES  C_GenderInstitutionType(GenderInstitutionTypeID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_GovernInstitution2
    FOREIGN KEY (GovernInstitutionID)
    REFERENCES  C_GovernInstitution(GovernInstitutionID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_IsDocumented2
    FOREIGN KEY (IsDocumentedID)
    REFERENCES  C_IsDocumented(IsDocumentedID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_LocateNear_LocateNear2
    FOREIGN KEY (LocateNearID)
    REFERENCES  C_LocateNear(LocateNearID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ReceiveService2
    FOREIGN KEY (GESReceiveServiceID)
    REFERENCES  C_ReceiveService(ReceiveServiceID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ReceiveService12
    FOREIGN KEY (receiveReceiveServiceId)
    REFERENCES  C_ReceiveService(ReceiveServiceID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ReceiveService22
    FOREIGN KEY (CSReceiveServiceID)
    REFERENCES  C_ReceiveService(ReceiveServiceID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ReceiveService32
    FOREIGN KEY (InServiceReceiveServiceID)
    REFERENCES  C_ReceiveService(ReceiveServiceID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ReceiveService42
    FOREIGN KEY (MovementReceiveServiceID)
    REFERENCES  C_ReceiveService(ReceiveServiceID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_SBGMeet2
    FOREIGN KEY (SBGMeetID)
    REFERENCES C_SBGMeet(SBGMeetID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_SBGMeet12
    FOREIGN KEY (SBGMeetID)
    REFERENCES  C_SBGMeet(SBGMeetID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_SchoolApplyType2
    FOREIGN KEY (SchoolApplyTypeID)
    REFERENCES  C_SchoolApplyType(SchoolApplyTypeID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_SchoolCategory2
    FOREIGN KEY (SchoolCategoryID)
    REFERENCES  C_SchoolCategory(SchoolCategoryID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_SchoolMealType2
    FOREIGN KEY (SchoolMealTypeID)
    REFERENCES  C_SchoolMealType(SchoolMealTypeID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_SourcesLastYesNo2
    FOREIGN KEY (SourcesLastYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ToiletResponsible1
    FOREIGN KEY (ToiletResponsibleID)
    REFERENCES  C_ToiletResponsible(ToiletResponsibleID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_ToiletType2
    FOREIGN KEY (ToiletTypeID)
    REFERENCES  C_ToiletType(ToiletTypeID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_TVETProgramm2
    FOREIGN KEY (TVETProgrammID)
    REFERENCES  C_TVETProgramm(TVETProgrammID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_Water2
    FOREIGN KEY (WaterID)
    REFERENCES  C_Water(WaterID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_WaterFlow2
    FOREIGN KEY (WaterFlowID)
    REFERENCES  C_WaterFlow(WaterFlowID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_WaterSource1
    FOREIGN KEY (WaterSourceID)
    REFERENCES  C_WaterSource(WaterSourceID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_WaterStorage2
    FOREIGN KEY (WaterStorageID)
    REFERENCES  C_WaterStorage(WaterStorageID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_WaterVesselsType1
    FOREIGN KEY (WaterVesselsTypeID)
    REFERENCES  C_WaterVesselsType(WaterVesselsTypeID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo
    FOREIGN KEY (SpecialEducationYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_CapGrantPartially2
    FOREIGN KEY (CapitationGrantYesNoPartiallyID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_ChangeRoom1
    FOREIGN KEY (ChangingRoomYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_CleanToilet1
    FOREIGN KEY (CleanToiletsYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_CoHosting1
    FOREIGN KEY (CoHostingYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_CurriculumLeader2
    FOREIGN KEY (CurriculumLeaderYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_Document1
    FOREIGN KEY (DocumentedYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_HealthCoordinator2
    FOREIGN KEY (HealthCoordinatorYesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_Hivaids1
    FOREIGN KEY (HIVAIDSYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_Hygiene2
    FOREIGN KEY (HygieneYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_Improvement2
    FOREIGN KEY (ImprovementPlanYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_InsetSourcebook1
    FOREIGN KEY (INSETSourcebooksYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_Insety2
    FOREIGN KEY (INSETYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_SanitationActivity1
    FOREIGN KEY (SanitationActivityYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_SchoolHealth1
    FOREIGN KEY (SchoolHealthYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_SPIP2
    FOREIGN KEY (SPIPYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_ToiletFun1
    FOREIGN KEY (ToiletsFunctionalYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_UnFun2
    FOREIGN KEY (UrinalsFunctionalYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_UseToilet1
    FOREIGN KEY (UseToiletsYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_Wash2
    FOREIGN KEY (WASHYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo_WaterFacility1
    FOREIGN KEY (WaterFacilityYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo12
    FOREIGN KEY (PropertyWalledYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo21
    FOREIGN KEY (ImprovementPlanYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo32
    FOREIGN KEY (BoardingFacilitiesYesNoID)
    REFERENCES  C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo42
    FOREIGN KEY (SelectBGYesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_C_YesNo52
    FOREIGN KEY (HIVAIDSIssuesYesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolQuestion1_DE_CensusSchool2
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE CensusSchoolRepair (
censusSchoolRepairId integer NOT NULL PRIMARY KEY AUTOINCREMENT,
 censusSchoolId              integer,
classroomRepairTypeId    integer,
value decimal(18, 2)
);
CREATE TABLE "CensusSchoolRoadType" (
  censusSchoolRoadTypeId    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId            integer,
  yesNoId                   integer,
  roadTypeId                integer,
  censusSchoolRoadType_ENG  nvarchar(250),

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolRoadType_C_RoadType
    FOREIGN KEY (RoadTypeID)
    REFERENCES C_RoadType(RoadTypeID), 
  CONSTRAINT FK_DE_CensusSchoolRoadType_C_YesNo
    FOREIGN KEY (YesNoID)
    REFERENCES C_YesNo(YesNoID), 
  CONSTRAINT FK_DE_CensusSchoolRoadType_DE_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE CensusSchoolShiftSystems_Del(
CensusSchoolShiftSystemsID integer NOT NULL PRIMARY KEY AUTOINCREMENT,
 CensusSchoolID              integer,
SchoolLevelGroupID   integer
);
CREATE TABLE CensusSchoolSubject_del(
CensusSchoolSubjectID integer NOT NULL PRIMARY KEY AUTOINCREMENT,
 CensusSchoolID              integer,
SchoolSubjectID  integer,
Value  decimal(18, 2)
);
CREATE TABLE "CensusSchoolSupportType" (
  censusSchoolSupportTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId             integer,
  supportTypeId              integer,

  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolSupportType_C_SupportType
    FOREIGN KEY (SupportTypeID)
    REFERENCES C_SupportType(SupportTypeID), 
  CONSTRAINT FK_DE_CensusSchoolSupportType_DE_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolTeacher" (
  censusSchoolTeacherId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId         integer,
  teacherInstanceId              integer,
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolTeacher_DE_CensusSchool1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolTeacherTraining" (
  censusSchoolTeacherTrainingId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                 integer,
  teacherTrainingId              integer,
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolTeacherTraining_C_TeacherTraining1
    FOREIGN KEY (TeacherTrainingID)
    REFERENCES C_TeacherTraining(TeacherTrainingID), 
  CONSTRAINT FK_DE_CensusSchoolTeacherTraining_CensusSchool2
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolTeacherWorkload" (
  censusSchoolTeacherWorkloadId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                 integer,
  teacherInstanceId              integer,
  schoolTypeId                   integer,
  schoolLevelId                  integer,
  enrolmentSubjectId             integer,
  value                          integer,
  /* Foreign keys */
  CONSTRAINT FK_DE_CensusSchoolTeacherWorkload_C_EnrolmentSubject2
    FOREIGN KEY (EnrolmentSubjectID)
    REFERENCES C_EnrolmentSubject(EnrolmentSubjectID), 
  CONSTRAINT FK_DE_CensusSchoolTeacherWorkload_C_SchoolLevel2
    FOREIGN KEY (SchoolLevelID)
    REFERENCES C_SchoolLevel(SchoolLevelID), 
  CONSTRAINT FK_DE_CensusSchoolTeacherWorkload_C_SchoolType2
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_DE_CensusSchoolTeacherWorkload_DE_CensusSchool2
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolTeachingGuide" (
  censusSchoolTeachingGuideId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId               integer,
  teachingGuideId              integer,
  schoolTypeId                 integer,
  schoolLevelGroupId           integer,
  availableSubjectId           integer,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolTeachingGuide_C_AvailableSubject
    FOREIGN KEY (AvailableSubjectID)
    REFERENCES C_AvailableSubject(AvailableSubjectID), 
  CONSTRAINT FK_CensusSchoolTeachingGuide_C_SchoolType
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_CensusSchoolTeachingGuide_C_TeachingGuide
    FOREIGN KEY (TeachingGuideID)
    REFERENCES C_TeachingGuide(TeachingGuideID), 
  CONSTRAINT FK_CensusSchoolTeachingGuide_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolVehicle_del" (
  censusSchoolVehicleId    integer NOT NULL PRIMARY KEY,
  censusSchoolId           integer,
  yesNoId                 integer,
  roadTypeId               integer,
  censusSchoolVehicle_ENG  nvarchar(250)

);
CREATE TABLE "CensusSchoolWFActionComment" (
  censusSchoolWFActionCommentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId                 integer,
  comment_ENG                    text,
  wfActionId                     integer,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolWFActionComment_CensusSchool
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "CensusSchoolWFActionCommentDocument" (
  censusSchoolWFActionCommentDocumentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolWFActionCommentId          integer,
  documentId                             integer,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolWFActionCommentDocument_CensusSchool
    FOREIGN KEY (CensusSchoolWFActionCommentID)
    REFERENCES CensusSchoolWFActionComment(CensusSchoolWFActionCommentID), 
  CONSTRAINT FK_CensusSchoolWFActionCommentDocument_Document
    FOREIGN KEY (DocumentID)
    REFERENCES Document(DocumentID)
);
CREATE TABLE "Division" (
  DivisionID             integer NOT NULL PRIMARY KEY,
  MajorVersion           integer,
  MinorVersion           integer,
  DivisionName_ENG       nvarchar(255),
  HeadquarterCode        nvarchar(255),
  DivisionCodeName       text,
  Location1ID            integer,
  Location2ID            integer,
  Location3ID            integer,
  Circuit                nvarchar(255),
  CircuitCode            nvarchar(255),
  CircuitCodeName        text,
  PoliticalConstituency  nvarchar(255),
  Code                   nvarchar(255),
  Locality               nvarchar(255),
  LocalityCodeName       text,
  LocalityTypeID         integer,
  Address                nvarchar(255),
  Address1               nvarchar(255),
  Address2               nvarchar(255),
  Address3               nvarchar(255),
  Phone                  nvarchar(255),
  Fax                    nvarchar(255),
  Email                  nvarchar(255),
  OwnerUserid            integer,
  UpdatedUserId          integer,
  DateUpdated            datetime,
  DateUpdated_YearID     integer,
  DateUpdated_QuarterID  integer,
  Createdid          integer,
  DateCreated            datetime,
  DateCreated_YearID     integer,
  DateCreated_QuarterID  integer,
  /* Foreign keys */
  CONSTRAINT FK_Division_C_LocalityType
    FOREIGN KEY (LocalityTypeID)
    REFERENCES C_LocalityType(LocalityTypeID), 
  CONSTRAINT FK_Division_C_Location1
    FOREIGN KEY (Location1ID)
    REFERENCES C_Location1(Location1ID), 
  CONSTRAINT FK_Division_C_Location2
    FOREIGN KEY (Location2ID)
    REFERENCES C_Location2(Location2ID), 
  CONSTRAINT FK_Division_C_Location3
    FOREIGN KEY (Location3ID)
    REFERENCES C_Location3(Location3ID), 
  CONSTRAINT FK_Division_C_User
    FOREIGN KEY (OwnerUserid)
    REFERENCES C_User(id), 
  CONSTRAINT FK_Division_C_User1
    FOREIGN KEY (UpdatedUserId)
    REFERENCES C_User(id), 
  CONSTRAINT FK_Division_C_User2
    FOREIGN KEY (Createdid)
    REFERENCES C_User(id)
);
CREATE TABLE "DivisionDocument" (
  DivisionDocumentID  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  DivisionID          integer,
  DocumentID          integer,
  /* Foreign keys */
  CONSTRAINT FK_DivisionDocument_Division
    FOREIGN KEY (DivisionID)
    REFERENCES Division(DivisionID), 
  CONSTRAINT FK_DivisionDocument_Document
    FOREIGN KEY (DocumentID)
    REFERENCES Document(DocumentID)
);
CREATE TABLE "DivisionLeaveType" (
  DivisionLeaveTypeID  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  DivisionID           integer,
  TypeOfLeaveID        integer,
  GenderID             integer,
  TeacherStaffID       integer,
  LeaveCount           integer,
  /* Foreign keys */
  CONSTRAINT FK_DivisionLeaveType_C_Gender
    FOREIGN KEY (GenderID)
    REFERENCES C_Gender(GenderID), 
  CONSTRAINT FK_DivisionLeaveType_C_TeacherStaff
    FOREIGN KEY (TeacherStaffID)
    REFERENCES C_TeacherStaff(TeacherStaffID), 
  CONSTRAINT FK_DivisionLeaveType_C_TypeOfLeave
    FOREIGN KEY (TypeOfLeaveID)
    REFERENCES C_TypeOfLeave(TypeOfLeaveID), 
  CONSTRAINT FK_DivisionLeaveType_Division
    FOREIGN KEY (DivisionID)
    REFERENCES Division(DivisionID)
);
CREATE TABLE "DivisionNote" (
  DivisionNoteID  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  DivisionID      integer,
  NoteTypeID      integer,
  Note_ENG        text,
  id          integer,
  DateCreated     datetime,
  /* Foreign keys */
  CONSTRAINT FK_DivisionNote_C_NoteType
    FOREIGN KEY (NoteTypeID)
    REFERENCES C_NoteType(NoteTypeID), 
  CONSTRAINT FK_DivisionNote_C_User
    FOREIGN KEY (id)
    REFERENCES C_User(id), 
  CONSTRAINT FK_DivisionNote_Division
    FOREIGN KEY (DivisionID)
    REFERENCES Division(DivisionID)
);
CREATE TABLE "DivisionReason" (
  DivisionReasonID    integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  DivisionID          integer,
  ReasonForLeavingID  integer,
  GenderID            integer,
  TeacherStaffID      integer,
  ReasonCount         integer,
  /* Foreign keys */
  CONSTRAINT FK_DivisionReason_C_Gender
    FOREIGN KEY (GenderID)
    REFERENCES C_Gender(GenderID), 
  CONSTRAINT FK_DivisionReason_C_ReasonForLeaving
    FOREIGN KEY (ReasonForLeavingID)
    REFERENCES C_ReasonForLeaving(ReasonForLeavingID), 
  CONSTRAINT FK_DivisionReason_C_TeacherStaff
    FOREIGN KEY (TeacherStaffID)
    REFERENCES C_TeacherStaff(TeacherStaffID), 
  CONSTRAINT FK_DivisionReason_Division
    FOREIGN KEY (DivisionID)
    REFERENCES Division(DivisionID)
);
CREATE TABLE "Document" (
  documentId              integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  fullPath                text,
  fileName                text,
  type                    varchar(100),
  body                    text,
   userId                 integer,
  folderPath              nvarchar(200),
  uploadDate              datetime,
  sessionId               varchar(50),
  isTempSaved             boolean,
  fileTitle_ENG           text,
  description_ENG         text,

  size                    integer,
  originalDocumentName    text,
  thumbnailPreviewWidth   integer,
  thumbnailPreviewHeight  integer,
  documentTypeId          integer,
  isActive                integer,
  uploadDateYearId        integer,
  DeletedOn               datetime,
  DeletedBy               integer,
  /* Foreign keys */
  CONSTRAINT FK_Document_C_UploadDateYear1
    FOREIGN KEY (UploadDateYearID)
    REFERENCES C_Year(YearID), 
  CONSTRAINT FK_Document_C_User1
    FOREIGN KEY (userId )
    REFERENCES C_User(id), 
  CONSTRAINT FK_Document_DocumentType1
    FOREIGN KEY (DocumentTypeID)
    REFERENCES DocumentType(DocumentTypeID)
);

CREATE TABLE "DocumentType" (
  documentTypeId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  typeName_Eng    nvarchar(50),

  DeletedOn       datetime,
  DeletedBy       integer
);
CREATE TABLE "Indicator" (
  indicatorId                 integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  majorVersion                integer,
  minorVersion                integer,
  indicatorTypeId             integer,
  indicatorStatusId           integer,
  indicatorRepresentID       integer NOT NULL,
  actualReportingFrequencyID  integer NOT NULL,
  targetReportingFrequencyID  integer NOT NULL,
  documentId                  integer,
  actualEntryModeId           integer,
  targetEntryModeId           integer,
  changeDirectionId           integer,
  createdBy                   integer,
  modifiedBy                  integer,
  createdOn                   datetime DEFAULT CURRENT_TIMESTAMP,
  createdOnYear               integer,
  createdOnQuarter            integer,
  modifiedOn                  datetime DEFAULT CURRENT_TIMESTAMP,
  modifiedOnYear              integer,
  modifiedOnQuarter           integer,
  shortname_ENG               text,
  displayName_ENG             text NOT NULL,
  description_ENG             text,
  justification_ENG           text,
  tooltip_ENG                 text,
  codeName_ENG                text,
  rfCodeName_ENG              text,
  startDate                   datetime,
  startDateYear               integer,
  startDateQuarter            integer,
  endDate                     datetime,
  endDateYear                 integer,
  endDateQuarter              integer,
  indicatorGUId               char(38) NOT NULL,
  OwnerUserid                 integer,
  governmentId                integer,
  rfLevel1Id                  integer,
  rfLevel2Id                  integer,
  rfLevel3Id                  integer,
  norm                        numeric(30,5),
  target                      numeric(30,5),
  targetProjectionPercentage  numeric(30,5),
  indicatorTargetNormId       integer,
  UpdatedUserId               integer,
  DateUpdated                 datetime,
  DateUpdated_YearId          integer,
  DateUpdated_QuarterId       integer,
  createdid               integer,
  dateCreated                 datetime,
  dateCreated_YearId          integer,
  dateCreated_QuarterId       integer,
  DeletedOn                   datetime,
  DeletedBy                   integer,
  indicatorContextTypeId      integer,
  /* Foreign keys */
  CONSTRAINT FK_Indicator_C_IndicatorStatus1
    FOREIGN KEY (IndicatorStatusID)
    REFERENCES C_IndicatorStatus(IndicatorStatusID), 
  CONSTRAINT FK_Indicator_C_User1
    FOREIGN KEY (CreatedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_Indicator_C_User12
    FOREIGN KEY (ModifiedBy)
    REFERENCES C_User(id), 
  CONSTRAINT FK_Indicator_C_User21
    FOREIGN KEY (OwnerUserid)
    REFERENCES C_User(id)
);
CREATE TABLE "IndicatorDocument" (
  indicatorDocumentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  indicatorId         integer,
  documentId           integer,
  /* Foreign keys */
  CONSTRAINT FK_IndicatorDocument_Document1
    FOREIGN KEY (DocumentID)
    REFERENCES Document(DocumentID), 
  CONSTRAINT FK_IndicatorDocument_Indicator1
    FOREIGN KEY (IndicatorID)
    REFERENCES Indicator(IndicatorID)
);
CREATE TABLE "IndicatorNote" (
  indicatorNoteId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  indicatorId      integer,
  noteTypeId       integer,
  note_ENG         text,
  id           integer,
  dateCreated      datetime,
  /* Foreign keys */
  CONSTRAINT FK_IndicatorNote_C_NoteType1
    FOREIGN KEY (NoteTypeID)
    REFERENCES C_NoteType(NoteTypeID), 
  CONSTRAINT FK_IndicatorNote_C_User2
    FOREIGN KEY (id)
    REFERENCES C_User(id), 
  CONSTRAINT FK_IndicatorNote_Indicator3
    FOREIGN KEY (IndicatorID)
    REFERENCES Indicator(IndicatorID)
);
CREATE TABLE IndicatorURL (
indicatorURLID integer NOT NULL PRIMARY KEY AUTOINCREMENT,
indicatorId integer,
url_ENG varchar(1500),
dateCreated datetime ,
id integer
);
CREATE TABLE "School" (
  schoolId                 integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  schoolInstanceId         integer,
  majorVersion             integer,
  minorVersion             integer,
  schoolCode               nvarchar(255),
  schoolName_ENG           nvarchar(255),
  schoolCodeName           text,
  schoolTypeId             integer,
  yearEstablished          integer,
  schoolStatusGroupId      integer,
  schoolStatusId           integer,
  gESRegistrationNumber    nvarchar(255),
  location1Id              integer,
  location2Id              integer,
  location3Id              integer,
  circuit                  nvarchar(255),
  circuitCode              nvarchar(255),
  circuitCodeName          text,
  politicalConstituency    nvarchar(255),
  locality                 nvarchar(255),
  localityTypeId           integer,
  address                  nvarchar(255),
  address1                 nvarchar(255),
  address2                 nvarchar(255),
  address3                 nvarchar(255),
  phone                    nvarchar(255),
  fax                      nvarchar(255),
  email                    nvarchar(255),
managementUnitId integer,
  educationManagementUnit  nvarchar(255),
  OwnerUserid              integer,
  UpdatedUserId            integer,
  DateUpdated              datetime,
  DateUpdated_YearId       integer,
  DateUpdated_QuarterId    integer,
  Createdid            integer,
  dateCreated              datetime,
  dateCreated_YearId       integer,
  dateCreated_QuarterId    integer,
  codeSequence             integer,
  DeletedOn                datetime,
  DeletedBy                integer,
  longitude                numeric(18,6),
  latitude                 numeric(18,6),
  schoolShapeId            integer,
  schoolShapeString        nvarchar(250),
  /* Foreign keys */

CONSTRAINT FK_DE_School_C_LocalityType1
    FOREIGN KEY (managementUnitId)
    REFERENCES  School(managementUnitId)
 
  CONSTRAINT FK_DE_School_C_LocalityType1
    FOREIGN KEY (LocalityTypeID)
    REFERENCES C_LocalityType(LocalityTypeID), 
  CONSTRAINT FK_DE_School_C_Location12
    FOREIGN KEY (Location1ID)
    REFERENCES C_Location1(Location1ID), 
  CONSTRAINT FK_DE_School_C_Location22
    FOREIGN KEY (Location2ID)
    REFERENCES C_Location2(Location2ID), 
  CONSTRAINT FK_DE_School_C_Location32
    FOREIGN KEY (Location3ID)
    REFERENCES C_Location3(Location3ID), 
  CONSTRAINT FK_DE_School_C_SchoolStatus2
    FOREIGN KEY (SchoolStatusID)
    REFERENCES C_SchoolStatus(SchoolStatusID), 
  CONSTRAINT FK_DE_School_C_SchoolType2
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_DE_School_C_User2
    FOREIGN KEY (OwnerUserid)
    REFERENCES C_User(id), 
  CONSTRAINT FK_DE_School_C_User21
    FOREIGN KEY (Createdid)
    REFERENCES C_User(id), 
  CONSTRAINT FK_DE_School_C_User22
    FOREIGN KEY (UpdatedUserId)
    REFERENCES C_User(id)
);
CREATE TABLE "SchoolDocument" (
  schoolDocumentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  schoolId         integer,
  documentId        integer,
  /* Foreign keys */
  CONSTRAINT FK_SchoolDocument_Document2
    FOREIGN KEY (DocumentID)
    REFERENCES Document(DocumentID), 
  CONSTRAINT FK_SchoolDocument_School2
    FOREIGN KEY (SchoolID)
    REFERENCES School(SchoolID)
);
CREATE TABLE "SchoolLevel" (
  schoolLevelId       integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  schoolId            integer,
  schoolTypeId        integer,
  schoolLevelGroupId  integer,

  /* Foreign keys */
  CONSTRAINT FK_SchoolLevel_C_SchoolType
    FOREIGN KEY (SchoolTypeID)
    REFERENCES C_SchoolType(SchoolTypeID), 
  CONSTRAINT FK_SchoolLevel_School
    FOREIGN KEY (SchoolID)
    REFERENCES School(SchoolID)
);
CREATE TABLE "SchoolNote" (
  schoolNoteId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  schoolId      integer,
  noteTypeId    integer,
  note_ENG      text,
  id        integer,
  dateCreated   datetime,
  /* Foreign keys */
  CONSTRAINT FK_SchoolNote_C_NoteTypee
    FOREIGN KEY (NoteTypeID)
    REFERENCES C_NoteType(NoteTypeID), 
  CONSTRAINT FK_SchoolNote_C_Usere
    FOREIGN KEY (id)
    REFERENCES C_User(id), 
  CONSTRAINT FK_SchoolNote_Schoole
    FOREIGN KEY (SchoolID)
    REFERENCES School(SchoolID)
);
CREATE TABLE "CensusSchoolSummary" (
  censusSchoolSummaryId     integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  censusSchoolId            integer,
  summaryTypeId       integer,
  schoolLevelGroupId  integer,
  count            integer,
  /* Foreign keys */
  CONSTRAINT FK_CensusSchoolSummary_C_Summary1
    FOREIGN KEY (SummaryTypeID)
    REFERENCES C_SummaryType(SummaryTypeID), 
  CONSTRAINT FK_CensusSchoolSummary_School1
    FOREIGN KEY (CensusSchoolID)
    REFERENCES CensusSchool(CensusSchoolID)
);
CREATE TABLE "Teacher" ("teacherId" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , teacherInstanceId         integer, "surname" nvarchar(250), "firstName" nvarchar(250), "staffNumber" INTEGER, "sSFNumber" INTEGER, "yearOfBirth" INTEGER, "genderId" INTEGER, "firstAppointmentYear" INTEGER, "currentPositionYear" INTEGER, "rankAppointedYear" INTEGER, "teacherTypeId" INTEGER, "teacherStatusId" INTEGER, "teacherFunctionId" INTEGER, "teacherQualificationStatusId" INTEGER, "officerSchedule" nvarchar(250), "registrationNumber" INTEGER, "yearCompleted" INTEGER, "relevantIndustrial" nvarchar(50), "isDeleted" INTEGER, "deletedOn" DATETIME, "deletedBy" INTEGER, "teacherAcademicQualificationId" INTEGER, "teacherProfessionalQualificationId" INTEGER, "teacherRankId" INTEGER, "location2Id" INTEGER, "location3Id" INTEGER, "teacherRankName_ENG" nvarchar(250), "teacherProfessionalQualificationName_ENG" nvarchar(250));
CREATE TABLE "TeacherNoteOn" ("teacherNoteOnId" INTEGER PRIMARY KEY  NOT NULL  UNIQUE , "teacherId" INTEGER, "teacherNoteId" INTEGER);
CREATE TABLE "TeacherDocument" (
  teacherDocumentId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  teacherId          integer,
  documentId             integer,
  /* Foreign keys */
  CONSTRAINT FK_TeacherDocument_Teacher
    FOREIGN KEY (teacherId)
    REFERENCES Teacher(teacherId), 
  CONSTRAINT FK_TeacherDocument_Document
    FOREIGN KEY (documentId)
    REFERENCES Document(DocumentID)
);
CREATE TABLE "TeacherDocumentNote" (
  teacherDocumentNoteId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  teacherId      integer,
  noteTypeId          integer,
  note_ENG            text,
  userId              integer,
  dateCreated         datetime,
  /* Foreign keys */
  CONSTRAINT FK_TeacherDocumentNote_C_NoteType
    FOREIGN KEY (NoteTypeID)
    REFERENCES C_NoteType(NoteTypeID), 
  CONSTRAINT FK_TeacherDocumentNote_C_User
    FOREIGN KEY ( userId )
    REFERENCES C_User(id), 
  CONSTRAINT FK_TeacherDocumentNote_Teacher
    FOREIGN KEY (teacherId)
    REFERENCES Teacher(teacherId)
);
CREATE TABLE "TeacherSalaryPaid" (
  teacherSalaryPaidId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  teacherId           integer,
  salaryPaidId         integer,
  /* Foreign keys */
  CONSTRAINT FK_TeacherSalaryPaid_C_TeacherSalaryPaid1
    FOREIGN KEY (SalaryPaidID)
    REFERENCES C_TeacherSalaryPaid(TeacherSalaryPaidID), 
  CONSTRAINT FK_TeacherSalaryPaid_Teacher1
    FOREIGN KEY (TeacherID)
    REFERENCES Teacher(TeacherID)
);
CREATE TABLE "TeacherSchoolLevel" (
 teacherSchoolLevelId  integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  teacherId             integer,
  schoolTypeId          integer,
  schoolLevelGroupId    integer,
  /* Foreign keys */
  CONSTRAINT FK_TeacherSchoolLevel_Teacher1
    FOREIGN KEY (teacherId )
    REFERENCES Teacher(teacherId )
);
CREATE TABLE UserData (
  id   integer NOT NULL PRIMARY KEY ,
  Name      nvarchar(250),
 AuthenticationToken     nvarchar(250)
);

CREATE TABLE "UserCheckedOutCensuses" (
"censusSchoolId" integer NOT NULL  DEFAULT (null) ,
"checkedOutUserId" integer NOT NULL );

CREATE TABLE "OnlineDeVersion" (
  VersionNumber  nvarchar(50) NOT NULL
 );
 insert into OnlineDeVersion values('0.0.58');



CREATE VIEW "DE_Portfolio_CensusSchool" AS
SELECT DISTINCT C_Location2.Location2ID, 
	   C_Location2.Name_ENG AS RegionName,
	   C_Location3.Location3ID,
	   C_Location3.Name_ENG AS DistrictName,
	   CensusSchool.CensusSchoolID,
	   CensusSchool.SchoolInstanceID ,
	   School.SchoolCode AS SchoolCode,
	   School.SchoolName_ENG AS SchoolName,
	   C_SchoolType.SchoolTypeID,
	   C_SchoolType.Name_ENG AS SchoolType,
	   CensusSchool.OwnerUserid,
	   CensusSchool.UpdatedUserId,C_User.name AS UpdatedUserName,
	   CensusSchool.DateUpdated ,
	   C_WFStates.WFStateID,
	   C_WFStates.Name_ENG AS WFState,
	   CASE WHEN GreenAlert = 0 AND RedAlert = 0 THEN 0 ELSE CASE WHEN GreenAlert = 0 THEN CASE WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> RedAlert THEN RedAlert ELSE 0 END WHEN RedAlert = 0 THEN CASE WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> 0 AND JulianDay('now') - JulianDay(CensusSchool.DateCreated)<= GreenAlert THEN 0 WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> GreenAlert THEN GreenAlert END ELSE CASE WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> 0 AND JulianDay('now') - JulianDay(CensusSchool.DateCreated)<= GreenAlert THEN 0 WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> GreenAlert AND JulianDay('now') - JulianDay(CensusSchool.DateCreated)<= RedAlert THEN GreenAlert ELSE RedAlert END END END AS AlertDays,
	   CASE WHEN GreenAlert = 0 AND RedAlert = 0 THEN 0 ELSE CASE WHEN GreenAlert = 0 THEN CASE WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> RedAlert THEN 2 ELSE 0 END WHEN RedAlert = 0 THEN CASE WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> 0 AND JulianDay('now') - JulianDay(CensusSchool.DateCreated)<= GreenAlert THEN 0 WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> GreenAlert THEN 1 END ELSE CASE WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> 0 AND JulianDay('now') - JulianDay(CensusSchool.DateCreated)<= GreenAlert THEN 0 WHEN JulianDay('now') - JulianDay(CensusSchool.DateCreated)> GreenAlert AND JulianDay('now') - JulianDay(CensusSchool.DateCreated)<= RedAlert THEN 1 ELSE 2 END END END AS Alert 
	   FROM CycleManagement cross join CensusSchool  INNER JOIN School ON CensusSchool .SchoolInstanceID = School .SchoolInstanceID 
	   INNER JOIN C_Location3 ON School.Location3ID = C_Location3.Location3ID 
	   INNER JOIN C_Location2 ON C_Location3.Location2ID = C_Location2.Location2ID 
	   INNER JOIN C_User ON CensusSchool.UpdatedUserId = C_User.id 
	   INNER JOIN C_WFStates ON C_WFStates.WFStateID = CensusSchool.WFStateID 
	   INNER JOIN C_SchoolType ON C_SchoolType.SchoolTypeID = School.SchoolTypeID
           INNER JOIN UserCheckedOutCensuses ON CensusSchool.censusSchoolId = UserCheckedOutCensuses.censusSchoolId
           INNER JOIN UserData ON UserCheckedOutCensuses.checkedOutUserId = UserData.id;


CREATE TRIGGER "_delete1" AFTER DELETE ON "CensusSchool"
BEGIN 
delete from CensusRoadType
where CensusSchoolID =OLD. CensusSchoolID ;

delete from CensusSchoolActiveGroup
where CensusSchoolID =OLD. CensusSchoolID ;

delete from CensusSchoolActivityExpenditure
where CensusSchoolID =OLD. CensusSchoolID ;

delete  from CensusSchoolActivityIncome
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolAttachment
where  CensusSchoolID =OLD. CensusSchoolID; 

delete from CensusSchoolAwayFrom
where  CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolBadReason
where  CensusSchoolID = OLD.CensusSchoolID; 

delete from CensusSchoolBoardingFacility_Del
where CensusSchoolID = OLD.CensusSchoolID ;

delete from  CensusSchoolCommenIssue
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolCommittee
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolDocument
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolElectricityType
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolElectricityWired
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolEnvProblem
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolRequiredEquipment
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolExamAccredit
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolExpenditure
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolFacility
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolFinanceSource
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolHandwash
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolIncome
where CensusSchoolID = OLD.CensusSchoolID ;

/* This part of delete trigger is commented because it hinders entity save process.
 instead on Census discard action we have explicit call to delete appropriate row in CensusSchoolIndicatorTracking table */
/*delete from CensusSchoolIndicatorTracking
where CensusSchoolID = OLD.CensusSchoolID ;*/

delete from CensusSchoolInfrastructure
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolLanguage
where CensusSchoolID = OLD.CensusSchoolID ;

delete from  CensusSchoolLevelSystem
where CensusSchoolID = OLD.CensusSchoolID ;

delete from  CensusSchoolMultigradeLevel
where CensusSchoolID = OLD.CensusSchoolID ;

delete from  CensusSchoolNote
where CensusSchoolID = OLD.CensusSchoolID ;

delete from  CensusSchoolQuestion
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolRepair
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolRoadType
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolShiftSystems_Del
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolSubject_del
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolSupportType
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolSupportType
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolTeacher
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolTeacherTraining
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolTeacherWorkload
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolTeachingGuide
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolWFActionComment
where CensusSchoolID = OLD.CensusSchoolID ;

delete from CensusSchoolSummary
where   CensusSchoolID = OLD.CensusSchoolID ;

END;


CREATE TRIGGER "_delete2" AFTER DELETE ON "School"
BEGIN 
delete from SchoolDocument
where   SchoolID       =OLD.SchoolID ;

delete from SchoolLevel
where   SchoolID       =OLD.SchoolID ;

delete from SchoolNote
where   SchoolID       =OLD.SchoolID ;

END;


CREATE TRIGGER "_delete3" AFTER DELETE ON "Teacher"
BEGIN 
delete from TeacherNoteOn
where   teacherId       =OLD. teacherId ;

delete from TeacherSalaryPaid
where   teacherId       =OLD. teacherId ;

delete from TeacherSchoolLevel
where   teacherId       =OLD. teacherId ;

delete from TeacherDocument
where   teacherId       =OLD. teacherId ;

delete from TeacherDocumentNote
where   teacherId       =OLD. teacherId ;

END
`;
