package utils

import (
	"encoding/json"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"time"
)

var secret string = "JDLALSCNIOZCJX"

func CreateJWTToken(payload interface{}, expiresIn time.Time) (string, error) {
	claims := jwt.MapClaims{}
	claims["payload"] = payload
	claims["exp"] = expiresIn.Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(secret)) // todo: put it in conf

	return tokenString, err
}

func JWTPayload(tokenString string, payload interface{}) error {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(secret), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		marshaled, _ := json.Marshal(claims["payload"])
		json.Unmarshal(marshaled, &payload)
		return nil
	} else {
		return err
	}
}
