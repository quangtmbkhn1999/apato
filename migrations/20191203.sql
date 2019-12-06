ALTER TABLE Review ADD createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE UserSaveApartment (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    userId BIGINT NOT NULL,
    apartmentId BIGINT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (apartmentId) REFERENCES Apartment(id)
);

ALTER TABLE UserSaveApartment ADD saved BOOLEAN DEFAULT 1;