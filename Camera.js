import cv2 
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score 


X = np.load('image.npz')['arr_0']
y = pd.read_csv ("labels.csv") ["labels"]
print (pd. Series (y).value_counts())
classes = ('A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
"Y", "Z"]

fetch("https://f292a3137990.ngrok.io/predict-digit"), {
method: "POST",
body: data,
headers: []
"content-type": "multipart/form-data",
}

getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(Permissions. CAMERA_ROLL);
    if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        }
    }
};

uploadImage = async (uri) => {/
    const data = new FormData(); let filename = uri.split("/")[uri.split("/").length - 1]
    let type = `image/${uri.split(':')[uri.split('.').length - 1]}` const 
    fileToUpload = {uri: uri, name: filename, type: type,
    data.append("digit", fileToUpload); fetch("https://f292a3137990. ngrok.io/predict-digit", {
    method: "POST", body: data, headers: {
    "content-type": "multipart/form-data", },
    .then((response) => response.json()); .then((result) => {
    console.log("Success:", result);
    .catch((error) => {
    console.error("Error:", error); 
}
);