#-*- coding: utf-8 -*-
import serial
import pyhdb
import time
import datetime

port = "COM7"
#port = "/dev/ttyUSB0"
#port = "/dev/ttyACM0"

serial01 = serial.Serial(port, baudrate = 9600)
serial01.flushInput()

#Device ID
gv_device_id = ''
gv_msg_type = ''

def parse_receive(recv):
    global gv_device_id
    global gv_msg_type
    
# Serial 라인에서 받은 문자열은 b"abcde" 처럼 받아지므로 decode를 해준다. 
    result = recv.decode("utf-8").split()
    print(result)
    gv_device_id = result[0]
    
    if result[1] == 'temperature:':
        #gv_msg_type = 'TH0001';        
        lv_val1 = round(float(result[2]), 1)
        lv_val2 = round(float(result[4]), 1)
        lv_val3 = round(float(result[6]), 1)
        #lv_val3 = 0
        
    elif result[1] == 'CDS:':
        #gv_msg_type = 'CDS001'
        lv_val1 = result[2]
        lv_val2 = 0
        
    elif result[0] == 'SOUND:':
        #gv_msg_type = 'SOD001'
        lv_val1 = result[2]
        val2 = 0
    else:
        lv_val1 = 0
        lv_val2 = 0
        
    print("DeviceID: ", gv_device_id)
    print("Value 1: ",   lv_val1)
    print("Value 2: ",   lv_val2)
    print("Value 3: ",   lv_val3)
    return (lv_val1, lv_val2, lv_val3)


def save_data_to_db(recv):
    global gv_device_id

# Parse data from serial communication
    values = parse_receive(recv)

    try:
        if gv_device_id != '':
            connection = pyhdb.connect(
                host="ehp8.innoever.net",
                port=30215,
                user="STUDENT30",
                password="Init1234"
            )
            cursor = connection.cursor()
            
    # SAP HANA Database Time        
            cursor.execute("SELECT CURRENT_TIMESTAMP FROM DUMMY")
            sap_timestamp = cursor.fetchone()
            print(sap_timestamp[0])
            
            lv_saptime = sap_timestamp[0].strftime("%Y-%m-%d %H:%M:%S.%f")
            print("lv_saptime: ", lv_saptime)

            stmt = 'insert into ZIT12_LYH values (?, ?, ?, ?, ?, ?, ?)'
            
    # Raspberry Pi Time
            time_stamp = time.strftime("%Y%m%d %H%M%S").split()
            now = datetime.datetime.now()
            print("RPI Time: ", now)
            nowDate = now.strftime('%Y-%m-%d')
            #print(nowDate)
            nowTime = now.strftime('%H:%M:%S')
            #print(nowTime)

            cursor.execute(stmt, (gv_device_id, lv_saptime, nowDate, nowTime, values[0], values[1], values[2]))
            print(cursor.rowcount)
                       
            connection.commit()
            connection.close()
    except pyhdb.exceptions.DatabaseError:
        time.sleep(10)
        
while True:
    if(serial01.inWaiting() > 0) :
        try:  
            input = serial01.readline()
            print(input)
                   
# test for receive values
#            values = parse_receive(input)

# Save to SAP HANA Database
            save_data_to_db(input)
            
        except IOError:
            print("IO Error")
            #exit()
