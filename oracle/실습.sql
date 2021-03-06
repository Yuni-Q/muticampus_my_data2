
CREATE TABLE EMPLOYEE(
                        ENO NUMBER NOT NULL,
                        ENAME VARCHAR(50),
                        JOB VARCHAR(50),
                        MANAGER NUMBER(4),
                        HIREDATE VARCHAR(50),
                        SALARY NUMBER,
                        COMMISSION NUMBER,
                        DNO NUMBER);
CREATE TABLE DEPARTMENT(
                        DNO NUMBER PRIMARY KEY,
                        DNAME VARCHAR(50),
                        LOC VARCHAR(50));
ALTER TABLE EMPLOYEE ADD CONSTRAINT employee_fk FOREIGN KEY(DNO) REFERENCES DEPARTMENT(DNO);     
INSERT INTO DEPARTMENT(DNO,DNAME,LOC) VALUES(20,'����','����');
INSERT INTO EMPLOYEE(ENO,ENAME,JOB,MANAGER,HIREDATE,SALARY,COMMISSION,DNO) VALUES(1,'LEE','STUDENT',1111,'2017-06-13',300,200,20);
SELECT * FROM EMPLOYEE WHERE DNO=20;
SELECT DNO,SUM(SALARY) FROM EMPLOYEE GROUP BY DNO; 
SELECT * FROM EMPLOYEE JOIN DEPARTMENT USING(DNO); 
grant connect, resource, plustrace, alter session to sds;
                        