package UserModels

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Token string `json:"token"`
}

type RegisterRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Name     string `json:"name"`
	Family   string `json:"family"`
}

type UpdateRequest struct {
	Password *string `json:"password"`
	Name     string  `json:"name"`
	Family   string  `json:"family"`
}
