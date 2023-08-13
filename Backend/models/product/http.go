package ProductModels

type CreateRequest struct {
	Name       string `json:"name"`
	CategoryID uint   `json:"category_id"`
	Price      uint   `json:"price"`
	Supply     uint   `json:"supply"`
	Image      string `json:"image"`
}

type UpdateRequest struct {
	Name       string `json:"name"`
	CategoryID uint   `json:"category_id"`
	Price      uint   `json:"price"`
	Supply     uint   `json:"supply"`
	Image      string `json:"image"`
}

type UploadResponse struct {
	Name string `json:"name"`
}
