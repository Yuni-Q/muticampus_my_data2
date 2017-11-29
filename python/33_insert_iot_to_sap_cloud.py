import urllib3
import certifi
import time
# import numpy as np
import serial
import datetime

# Serial port
gv_port = "COM7"
#gv_port = "/dev/ttyUSB0"    #Arduino UNO compatable
#gv_port = "/dev/ttyACM0"     #Arduino UNO Genine

serial01 = serial.Serial(gv_port, baudrate = 9600)
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
    
    if result[0] == 'temperature:':
        #gv_msg_type = 'TH0001';        
        lv_val1 = round(float(result[1]), 1)
        lv_val2 = round(float(result[3]), 1)
        lv_val3 = round(float(result[5]), 1)

    elif result[0] == 'CDS:':
        #gv_msg_type = 'CDS001'
        lv_val1 = result[2]
        lv_val2 = 0
        
    elif result[0] == 'SOUND:':
        lv_val1 = result[2]
        val2 = 0
    else:
        lv_val1 = 0
        lv_val2 = 0
        
    print("DeviceID: ", gv_device_id)
    print("Value 1: ", lv_val1)
    print("Value 2: ", lv_val2)
    print("Value 3: ", lv_val3)
    return (lv_val1, lv_val2, lv_val3)

# It is absolutely CRITICAL that you use certificate validation to ensure and guarantee that
# 1. you are indeed sending the message to *.hanatrial.ondemand.com and
# 2. that you avoid the possibility of TLS/SSL MITM attacks which would allow a malicious person to capture the OAuth token
# URLLIB3 DOES NOT VERIFY CERTIFICATES BY DEFAULT
# Therefore, install urllib3 and certifi and specify the PoolManager as below to enforce certificate check
# See https://urllib3.readthedocs.org/en/latest/security.html for more details

# use with or without proxy
http = urllib3.PoolManager(
	cert_reqs='CERT_REQUIRED', # Force certificate check.
	ca_certs=certifi.where(),  # Path to the Certifi bundle.
)
# http = urllib3.proxy_from_url('http://proxy_host:proxy_port')

# interaction for a specific Device instance - replace 1 with your specific Device ID
#url = 'https://iotmms_on_your_trial_system.hanatrial.ondemand.com/com.sap.iotservices.mms/v1/api/http/data/1'
#url = 'https://iotmmss0015880982trial.hanatrial.ondemand.com/com.sap.iotservices.mms/v1/api/http/data/ebcf3aac-7205-427b-beaa-a4c8725a1201'

headers = urllib3.util.make_headers()

#  [Device ID | Device ID Oauth Token | messageType]
gs_hcp = ['f0fd4036-6dc0-4912-98ba-af63ec28db28', 'd461531a7ee271fdf975a8a768422fc9', 'a1f9aa336841513c08e6']
print("message type ID:", gs_hcp[2])
  
 
def send_data_to_scp(recv):
# Device ID, OAuth Token, Message Type ID  
  global gs_hcp
  
  values = parse_receive(recv)
    
# timestamp
  lv_tstamp = str(time.time()).split('.')
  print(lv_tstamp)

  if (values[1] == 0 and values[2] == 0):
      return("Error")

  url = ( 'https://iotmmsp1942747254trial.hanatrial.ondemand.com/com.sap.iotservices.mms/v1/api/http/data/' +
          gs_hcp[0] )

  headers = urllib3.util.make_headers()

# use with authentication
# please insert correct OAuth token
#headers['Authorization'] = 'Bearer ' + 'your_oauth_token'
  headers['Authorization'] = 'Bearer ' + gs_hcp[1]
  headers['Content-Type'] = 'application/json;charset=utf-8'

  body=( '{"mode":"sync","messageType":"' + gs_hcp[2] +'"'
       + ',"messages":[{'
       + '"temperature":' + str(values[0])
       + ',"humidity":'    + str(values[1])
       + ',"brightness":'       + str(values[2])
       + ',"timestamp":'
       + str(lv_tstamp[0]) + '}]}' )

  print(body)

  try:
    r = http.urlopen('POST', url, body=body, headers=headers)
    print(r.status)
    print(r.data)
  except urllib3.exceptions.SSLError as e:
    print(e)

while True:
    if(serial01.inWaiting() > 0) :
        try:  
            input = serial01.readline()
            print(input)
                   
# test for receive values
#            values = parse_receive(input)

# Send data to SAP Cloud Platform
            send_data_to_scp(input)
			
# Sleep 60 seconds			
            time.sleep(60)
        except IOError:
            print("IO Error")
            #exit()
